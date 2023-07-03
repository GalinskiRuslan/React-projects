import React from "react";
import { useQuery } from "@apollo/client";
import { SEARCH_REPOSITORY } from "../../query/repos";
import { useEffect, useState } from "react";
import RepositoriesList from "../../components/RepositoriesList/RepositoriesList";

function MainPage() {
  const [searchValue, setSearchValue] = useState(" ");
  const [nextPage, setNextPage] = useState();
  const { data, loading, error, refetch } = useQuery(SEARCH_REPOSITORY, {
    variables: { query: searchValue, after: nextPage },
  });
  useEffect(() => {
    console.log(data, loading, error);
    setNextPage(data?.search.pageInfo.startCurso);
  });
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setSearchValue(e.target.value);
          refetch();
        }}
        value={searchValue}
      />
      {loading ? (
        <div>loading...</div>
      ) : (
        <RepositoriesList data={data?.search.edges} />
      )}
      <button onClick={() => console.log(searchValue)}>123</button>
      {data?.search.pageInfo.hasNextPage ? (
        <button onClick={() => setNextPage(data?.search.pageInfo.endCursor)}>
          next
        </button>
      ) : (
        <button disabled>next</button>
      )}
      {data?.search.pageInfo.hasPreviousPage ? (
        <button onClick={() => setNextPage(data?.search.pageInfo.startCursor)}>
          per
        </button>
      ) : (
        <button disabled>per</button>
      )}
    </div>
  );
}

export default MainPage;
