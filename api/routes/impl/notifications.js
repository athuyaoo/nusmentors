const pool = require("../../db");

const getnotifications = (req, res) => {
  const uid = req.body.uid;
  pool.query(
    `SELECT DISTINCT U.name, N.nid, R.mentee_id , N.notif_type, N.date_created, N.is_read, R.title, R.req_id 
  FROM UsersInfo U, (Notifies N NATURAL JOIN Mentorship M) JOIN Requests R USING (req_id)
  WHERE M.mentor_id = U.user_id
  AND R.mentee_id = $1`,
  [uid],
    (q_err, q_res) => {
      if (q_err) {
        res.status(500).send(q_err);
      } else {
        res.json(q_res.rows);
      }
    },
  );
};

const markasread = (req, res) => {
  const nid = req.body.nid;
  pool.query(
    `UPDATE Notifies SET is_read = TRUE WHERE nid = $1`,
    [nid],
    (q_err, q_res) => {
      if (q_err) {
        res.status(500).send(q_err);
      } else {
        res.status(200).send({ message: "OK" });
      }
    },
  );
};

module.exports = { getnotifications, markasread };
