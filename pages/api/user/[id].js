import dbConnect from '../../../database/db';
import User from '../../../models/user';

const handlerUser = async (req, res) => {
  // GET USER BY ID
  const { method } = req;
  const { id } = req.query;
  await dbConnect();
  if (method === 'GET') {
    try {
      const userById = await User.findById(id);
      return res
        .status(200)
        .send({ msg: 'User fetched successfully', data: userById });
    } catch (err) {
      console.log('++++++ Server error ++++++', err);
    }
  }
  // DELETE USER BY ID
  if (method === 'DELETE') {
    await User.findByIdAndDelete(id);
    return res.status(200).send('User Deleted successfully');
  }
};
export default handlerUser;
