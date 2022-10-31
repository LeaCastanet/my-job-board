const Jobs = (props) => {
  return (
    <div className={`Jobs ${props.color}`}>
      <h2 className={"title"}>{props.title}</h2>
      <div className={"info"}>
        <p className={"contractType"}>{props.contractType}</p>
        <p className={"country"}>{props.country}</p>
        <p className={"city"}>{props.city}</p>
      </div>
    </div>
  );
};

export default Jobs;
