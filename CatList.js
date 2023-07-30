import React from 'react';

function CatList() {
  const cats = [
    { id: 1, name: 'Мурзик', breed: 'Домашний кот', image: 'https://www.eli.ru/img/articles/simvol-cat-rabbit-2.jpg' },
    { id: 2, name: 'Барсик', breed: 'Британская кошка', image: 'https://rg.ru/uploads/images/156/32/33/dfg.jpg' },
    { id: 3, name: 'Васька', breed: 'Персидская кошка', image: 'https://s1.bloknot-stavropol.ru/thumb/850x0xcut/upload/iblock/eae/i5uzhc3q0r7uat03xuh94n11hju63fkx/Snimok-ekrana-2022_04_09-v-19.43.44.png' },
  ];

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

  return (
    <div>
      <h2>Коты, живущие в вашем доме:</h2>
      {cats.map((cat) => (
        <div key={cat.id} style={catBlockStyle}>
          <img src={cat.image} alt={cat.name} style={catImageStyle} />
          <div>
            <p>Имя: {cat.name}</p>
            <p>Порода: {cat.breed}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CatList;