export const trending =(req, res) => res.send("Home page Videos");
export const see=(req,res) => 
{
    console.log(req.params);
    return res.send(`Watch ${req.params.id}`);

}
export const edit=(req,res)=>
{
    console.log(req.params);
    return res.send("Edit");

}
export const search = (req,res)=>res.send("Search");
export const upload=(req,res)=>res.send("Upload");
export const deleteVideo = (req, res) => 
{
    console.log(req.params);
    return res.send("Delete Video");

}
//  export  default 하나만 가능. 
