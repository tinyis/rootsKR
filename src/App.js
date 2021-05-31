import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import "./styles.css";
//import pict from '/images/Ayvazovsky.jpg';

const sights = [
  { id: 1, name: "Музей горной техники" },
  { id: 2, name: "Скалы 'Орлиное гнездо'" },
  { id: 3, name: "Ботанический сад" }
];

function SightsList() {
  return (
    <ul>
      {sights.map(item => {
        return (
          <li key={item.id}>
            <Link to={`/othersights/${item.id}`}>{item.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}

function Sight(props) {
  let sightId;
  let sight;

  sightId = parseInt(props.match.params.id, 10);

  for (let i = 0; i < sights.length; i++) {
    if (sights[i].id === sightId) {
      sight = sights[i];
      break;
    }
  }

  if (sight !== undefined) {

    if(sight.id===1)
      return (
        <div>
          <h3>{sight.name}</h3>
          <img src="/images/1.jpg"/>
        </div>
        );

      if(sight.id===2)
        return (
          <div>
            <h3>{sight.name}</h3>
            <img src="/images/2.jpg"/>
          </div>
          );

      if(sight.id===3)
        return (
          <div>
            <h3>{sight.name}</h3>
            <img src="/images/3.jpg"/>
          </div>
      );
  
  } else {
    return <h3>Sight is not found!</h3>;
  }
}

function MainSight() {
  return (
    <>
      <h2>Главная достопримечательность</h2>
      <img src="/images/60dff683f32c09f66fc303b35e3a6a9e_c1.jpg"/>
    </>);
}
function Main() {
  return (
    <>
      <p>Криво́й Рог (укр. Кривий Ріг) — город областного значения в Днепропетровской области Украины. Административный центр Криворожского района. 
        До конца 2020 года составлял Криворожский городской совет.Город основан в 1775 году и расположен на месте слияния рек Ингулец и Саксагань. 
        Седьмой по численности населения город Украины, центр Криворожской агломерации. Один из самых длинных городов Европы — линейное расстояние от крайней северной точки до южной 66,1 км по прямой[6]. На официальном сайте исполкома Криворожского городского совета указанная длина города — 126 км.Кривой Рог — важный экономический и научный центр Украины, крупный транспортный узел, центр разработки Криворожского железорудного бассейна.</p>
      <p>Город является административным центром Криворожского городского совета, в который, кроме того, входят посёлки 
        Авангард, Горняцкое, Коломийцево, сёла Новоивановка, Терноватый Кут. В состав города вошли ранее самостоятельные 
        населённые пункты — город Ингулец, пгт Калинино, Зелёное, Мировское, Рахмановка, Зализничное, посёлки 
        Рудничное и Степное.</p>
      <p>В состав Криворожского городского совета входят 90 депутатов, избираемых посредством выборов сроком на 5 лет.
        Исполнительную власть возглавляет городской глава и исполнительный комитет, состоящий из 12 членов. 
        Ему подчинены 33 департамента и управления, каждое из которых отвечает за определённую сферу городской жизни: 
        градостроительство, экономическую или финансовую политику, жилищное хозяйство и инфраструктуру. 
        В каждом административном районе органом исполнительной власти является районная администрация.</p>
    </>);
}
function OtherSights() {
  return(
    <Switch>
    <Route exact path="/othersights" component={SightsList} />
    <Route path="/othersights/:id" component={Sight} />
  </Switch>
  );
}
function Pictures() {
  return(
    <div id="pictures">
        <div class="krPic">
          <img src="/images/_106555988_kryviy_rig_landscape.jpg"/>
        </div>
        <div class="krPic">
          <img src="/images/5c27a0802b51c576405787.jpg"/>
        </div>
        <div class="krPic">
          <img src="/images/08.07.2020_krivojrog.jpg"/>
        </div>
        <div class="krPic">
          <img src="/images/395910.jpg"/>
        </div>
        <div class="krPic">
          <img src="/images/10383843.jpg"/>
        </div>
    </div>
  );
}
function NotFound() {
  return <h2>Not found</h2>;
}
function NavMenu() {
  return (
    <>
      <Link to="/" className="links">
        Информация о городе
      </Link>
      <Link to="/mainsight" className="links">
        Самая известная достопримечательность
      </Link>
      <Link to="/othersights" className="links">
        Другие достопримечательности
      </Link>
      <Link to="/pictures" className="links">
        Фотографии города
      </Link>
    </>
  );
}

function App() {
  return (
    <div className="App">
       <Router>
        <div>
          <NavMenu />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/mainsight" component={MainSight} />
            <Route path="/othersights" component={OtherSights} />
            <Route path="/pictures" component={Pictures} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
