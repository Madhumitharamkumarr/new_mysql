const db = require("../data/data");
const getStudents = (req, res) => {
  const sql = "SELECT * FROM demo";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching students:", err.message);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res.status(200).json(results);
  });
};
exports.getStudents = getStudents;
// add students

exports.addStudent = (req, res) => {
  const { id, name, dept } = req.body;
  const sql = "INSERT INTO demo (id, name, dept) VALUES (?, ?, ?)";
  db.query(sql, [id, name, dept], (err, results) => {
    if (err) {
      console.error("Error adding student:", err.message);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res
      .status(201)
      .json({ message: "Student added successfully", student: results });
  });
};

// put students
exports.updateStudent = (req, res) => {
    const { id } = req.params;
    const { name, dept } = req.body;
    const sql = "UPDATE demo SET name = ?, dept = ? WHERE id = ?";
    db.query(sql, [name, dept, id], (err, results) => {
      if (err) {
        console.error("Error updating student:", err.message);
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }
        res.status(200).json({ message: "Student updated successfully" });
    });
  };



  
// delete students
exports.deleteStudent = (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM demo WHERE id = ?";    
    db.query(sql, [id], (err, results) => {
        if (err) {
            console.error("Error deleting student:", err.message);
            res.status(500).json({ error: "Internal Server Error" });
            return;
        }
        res.status(200).json({ message: "Student deleted successfully" });
    });
};
