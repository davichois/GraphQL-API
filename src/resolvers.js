import User from "./models/user";

export const resolvers = {
  Query: {
    getUser: async (_, { id }) => {
      return await User.findById(id);
    },

    getUsers: async () => {
      return await User.find();
    },
  },

  Mutation: {
    createUser: async (_, { nickname, fullname, phone, city }) => {
      const user = new User({
        nickname: nickname,
        fullname: fullname,
        phone: phone,
        city: city,
      });
      return await user.save();
    },

    updateUser: async (_, { id, nickname, fullname, phone, city }) => {
      const data = { nickname, fullname, phone, city };
      return await User.findOneAndUpdate(id, data);
    },

    deleteUser: async (_, { id }) => {
      return await User.findByIdAndDelete(id);
    },
  },
};
