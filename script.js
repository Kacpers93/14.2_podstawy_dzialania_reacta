var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    imgur: 'https://picsum.photos/400/300/?image=5',
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    imgur: 'https://picsum.photos/400/300/?image=290',
  },
  {
    id: 3,
    title: 'Flash',
    desc: 'serial o super szybkim człowieku',
    imgur: 'https://picsum.photos/400/300/?image=666',
  },
  {
    id: 4,
    title: 'Dr.House',
    desc: 'serial o lekarzu',
    imgur: 'https://picsum.photos/400/300/?image=123',
  },
  {
    id: 5,
    title: 'Interstellar',
    desc: 'film o podróży kosmicznej',
    imgur: 'https://picsum.photos/400/300/?image=890',
  },
];
var moviesElements = movies.map(function (movie) {
  return React.createElement('li', {
      key: movie.id
    },
    React.createElement('h2', {}, movie.title),
    React.createElement('p', {}, movie.desc),
    React.createElement("img", {
      src: movie.imgur
    })
  );
});
var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );
ReactDOM.render(element, document.getElementById('app'));
