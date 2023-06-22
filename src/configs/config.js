const PORT = process.env.PORT || 5001;

export { PORT };


export default {
  pg: {
    connectionString: process.env.PG_CONNECTION_STRING,
  },
};

