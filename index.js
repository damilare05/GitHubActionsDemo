
//importing express framework
const express = require ("express")
const app = express();

//responsd with successful for "hello world" for request that hit root"/"
app.get("/", function (req,res) {
	return res.send ("Hello World");
});

// listen to port 7000
app.listen(process.env.PORT || 7000, () => {
		console.log("Server is Up and Running");
});

module.exports = app ;
