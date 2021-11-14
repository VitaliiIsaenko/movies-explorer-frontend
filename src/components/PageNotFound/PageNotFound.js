import React from 'react';
import '../Button/Button.css';
import { useHistory } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound () {
  const history = useHistory();
  return (
    <div className="not-found">
      <h3 className="not-found__title">
       404
       </h3>
       <p className="not-found__text">Страница не найдена</p>
      <button type="button" className="button button_type_cta" onClick={() => history.goBack()}>Назад</button>
    </div>
  )
}

export default PageNotFound; 