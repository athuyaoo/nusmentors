var express = require("express");
var router = express.Router();

/*------ GENERAL -------*/
const getcareerfields = require("./impl/getcareerfields");

router.route("/careers").get(getcareerfields);
/*====== GENERAL =======*/

/*------- AUTH ---------*/
const auth = require("./impl/auth");

router.route("/auth")
    .post(auth.createnewuser);
router.route("/auth/nusemail")
    .put(auth.updatenusemail);
router.route("/auth/verify")
    .put(auth.verifyemail);
router.route("/auth/:uid")
    .put(auth.updateinfo)
    .post(auth.authenticate);
/*====== END AUTH ======*/

/*-------- REQS --------*/
const reqs = require("./impl/reqs");

router.route("/reqs")
    .post(reqs.postnewhelp)
    .get(reqs.getallrequests);
router.route("/reqs/:req_id")
    .delete(reqs.deleterequest)
    .put(reqs.updaterequest);
router.route("/reqs/:req_id/:mentor_uid")
    .put(reqs.acceptrequest);
/*====== END REQS ======*/

/*------ MATCHES -------*/
const matches = require("./impl/matches");

router.route("/matches/:req_id/:requester_uid")
    .get(matches.getcontact);
router.route("/matches/:req_id")
    .delete(matches.dropmentee)
    .put(matches.markascomplete);
/*===== END MATCHES ====*/

module.exports = router;
