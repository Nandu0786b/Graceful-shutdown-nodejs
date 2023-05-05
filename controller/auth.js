export const profile=async (req,res)=>{
    try {
        setTimeout(() => {
            console.log("i am here ")
            res.status(200).json({status:"ok",function:"triggered after 5 second your request"})
        }, 5000);
    } catch (error) {
        console.error(error);
        res.status(500).json({
        status: "error",
        message: "Internal server error",
        });
    }
}