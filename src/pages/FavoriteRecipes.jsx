import Content from "../components/Content";

function FavoriteRecipes({ data, onHandleDel }) {
  console.log(data);

  return (
    <Content data={data} onHandleDel={onHandleDel}>
      <h2 style={{ marginBottom: "20px" }}>
        {data.length
          ? `You have ${data.length} favorite recipes`
          : `You don't have favorite recipes!`}
      </h2>
    </Content>
  );
}

export default FavoriteRecipes;
