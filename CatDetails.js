import React from 'react';

function CatDetails() {
  const cat = { name: 'Мурзик', breed: 'Домашний кот', age: 5, color: 'серый' };

  const catBlockStyle = {
    backgroundColor: 'lightblue',
    borderRadius: '10px',
    padding: '10px',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
  };

  const catImageStyle = {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '50%',
    marginRight: '10px',
  };

  const catDetailsStyle = {
    ...catBlockStyle,
    backgroundColor: 'pink',
    marginBottom: '20px',
  };

  return (
    <div>
      <h2>Ваш кот:</h2>
      <div style={catDetailsStyle}>
        <img src="https://www.eli.ru/img/articles/simvol-cat-rabbit-2.jpg" alt={cat.name} style={catImageStyle} />
        <div>
          <p>Имя: {cat.name}</p>
          <p>Порода: {cat.breed}</p>
          <p>Возраст: {cat.age} год(а)</p>
          <p>Цвет: {cat.color}</p>
        </div>
      </div>
    </div>
  );
}

export default CatDetails;