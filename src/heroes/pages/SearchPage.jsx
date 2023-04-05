import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../components'
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { q = ''} = queryString.parse(location.search);
  const heroes = getHeroesByName(q);
  const showHero = ( q.length === 0 );
  const showError = ( q.length > 0 ) && heroes.length === 0 ;

  const { searchText , onInputChange} = useForm({
    searchText: q
  })

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim().length <=1) return;
    navigate(`?q=${ searchText.toLowerCase() }`)
  }

  return (
    <>
    <div className="container">
      <div>Search</div>
      <hr />

      <div className="row ">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={ onSearchSubmit }>
            <input 
              type="text" 
              name="searchText" 
              id="" 
              className='form-control'
              autoComplete='off'
              value={ searchText }
              onChange={ onInputChange }
            />
            <button className='btn btn-outline btn-primary mt-1'>search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {   /* primera forma
            (q==='')
            ?   <div className="alert alert-primary">Search a Hero</div>
            :   (heroes.length===0) 
            &&  <div className="alert alert-danger">there's no a Hero <b>{ q }</b></div> */
          }
          <div className="alert alert-primary" style={{ display: showHero ? '' : 'none' }}>
            Search a Hero
          </div>

          <div className="alert alert-danger" style={{ display: showError ? '' : 'none' }}>
            there's no a Hero <b>{ q }</b>
          </div>


          {
            
            heroes.map(hero => ( <HeroCard key={ hero.id } { ...hero }/> ))
          }
          
          
        </div>
      </div>
    </div>
    </>
  )
}
