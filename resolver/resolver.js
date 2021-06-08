import Task from '../db/task'

const resolvers = {
    Query: {
     tasks: async (root) => {
      try {
        const tasks = await Task.findAll();
        return tasks;
      } catch (err) {
        console.log(err);
      }
    },
     task: async (root, { id }) => {
      try {
        Task.hasOne(Task, { foreignKey: 'parent'});
        Task.belongsTo(Task, { foreignKey: 'parent' });
        const tasks = await Task.findOne({ 
          where: { id: id },
          include: Task 
         })
        return tasks;
      } catch (err) {
        console.log(err);
      }
     } 
    },
    Mutation: {
     createTask: async (root, {id, title, parent}) => {
      try {
        const tasks = await Task.create({ id, title, parent }) 
        return tasks;
      } catch (err) {
        console.log(err);
      }
     }  
    },
  };

  export default resolvers