const teacher = (req, res, next) => {
  try {
      const { role } = req.data;
      console.log(role);

      if (!role) {
          return res.status(401).json({
              message: "you are not authorization to perform this action",
          });
      }

      if (role != "teacher") {
          return res.status(401).json({
              message: "you not teacher",
          });
      }

      next();
  } catch (error) {
      console.log(error.message);
  }
};

export default teacher;
