import React, { useState, useEffect } from "react";
import Card from "./Card";
import Pagination from "react-js-pagination";

function FetchRM() {
  const [fetchRickAndMorty, setFetchRickAndMorty] = useState([]);
  const [page, setPage] = useState(1);

  const handleChangePage = (pageNumber) => {
    setPage(pageNumber);
    getApi(`https://rickandmortyapi.com/api/character/?page=${pageNumber}&limit=20`)
  };

  const getApi = async (url) => {
    setFetchRickAndMorty([])
    let res = await fetch(url),
      json = await res.json();
    console.log(json);

    json.results.forEach(async (element) => {
      let characters = {
        id: element.id,
        avatar: element.image,
        name: element.name,
        gender: element.gender,
        species: element.species,
        status: element.status,
        homeworld: element.origin.name,
        nowLocated: element.location.name,
      };

      setFetchRickAndMorty((fetchRickAndMorty) => [
        ...fetchRickAndMorty,
        characters,
      ]);
    });
  };

  useEffect(() => {
    setFetchRickAndMorty([]);


    getApi(`https://rickandmortyapi.com/api/character/?page=${page}`);
  }, []);

  return (
    <>
      <div className="container my-5">
        <div className="row my-3 d-flex justify-content-center">
          {fetchRickAndMorty === 0 ? (
            <h3>Loading.......</h3>
          ) : (
            fetchRickAndMorty.map((el) => (
              <Card
                key={el.id}
                avatar={el.avatar}
                name={el.name}
                gender={el.gender}
                species={el.species}
                status={el.status}
                homeworld={el.homeworld}
                located={el.nowLocated}
              />
            ))
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center">
          <Pagination
            activePage={page}
            itemsCountPerPage={20}
            totalItemsCount={671}
            pageRangeDisplayed={5}
            onChange={handleChangePage}
            itemClass="page-item"
            linkClass="page-link"
          />
        </div>
      </div>
    </>
  );
}

export default FetchRM;
