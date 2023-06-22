const role = (req, res, next) => {
    try {
        const { role } = req.data;
        console.log(req.data);

        if (!role) {
            return res.status(401).json({
                message: "you are not authorization to perform this action",
            });
        }

        if (role != "admin") {
            return res.status(401).json({
                message: "you not admin",
            });
        }

        next();
    } catch (error) {
        console.log(error.message);
    }
};

export default role;
