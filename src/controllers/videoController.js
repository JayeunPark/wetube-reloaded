export const trending =(req, res) => res.render("home",{pageTitle: "Home"}); //render로 pug 보냄
export const see=(req,res) => res.render("watch",{pageTitle: "Watch"});
// {
//     console.log(req.params);
//     return res.send(`Watch ${req.params.id}`);

// }
export const edit=(req,res)=> res.render("edit",{pageTitle: "Watch"});
// {
//     console.log(req.params);
//     return res.send("Edit");

// }
export const search = (req,res)=>res.send("Search");
export const upload=(req,res)=>res.send("Upload");
export const deleteVideo = (req, res) => 
{
    console.log(req.params);
    return res.send("Delete Video");

}
//  export  default 하나만 가능. 
