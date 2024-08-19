const TaskEditpage = ({ params }: { params: { id: string } }) => {
  console.log(params);
  return <div>{params.id}動的</div>;
};

export default TaskEditpage;
