// import { sql, poolPromise } from '../config/sql.js';

const Login = async (req, res, next) => {
  try {
    console.log("=================================");
    //frontend에서 보낸 data를 받기 위해선 body를 호출해야 한다.
    //그냥 param으로 보내면 query
    console.log(req.query);
    console.log("=================================");
    return res.status(200).json({
      code: 200,
      message: '토큰이 발급되었습니다.',
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Login Server Error');
  }
};

const ctrl = { Login };

export { ctrl };