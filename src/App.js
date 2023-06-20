import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageKontakty from "./pages/kontakty/index"
import PageNovosti from "./pages/novosti/novosti"
import PageoNas from './pages/oNas/oNas';
import PageLatte from './pages/spisok/coffee/late';
import PageKapuchino from './pages/spisok/coffee/kapuchino';
import PageVensky_coffee from "./pages/spisok/coffee/vensky_coffee";
import PageRaf_ananas from './pages/spisok/aftor_coffe/raf_ananas';
import PageRaf_kaktus from './pages/spisok/aftor_coffe/raf_kaktus';
import PageRaf_kokos from './pages/spisok/aftor_coffe/raf_kokos';
import PageMedovik from './pages/spisok/cake/medovik';
import PageChizcake from './pages/spisok/cake/chizcake';
import PageChocolate from './pages/spisok/cake/chocolate';
import PageFooter from './pages/footer/footer';
import PageHeader from './pages/header/header';
import PageMenuM from './pages/menuM/menu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PageHeader/>
          <Routes>
            <Route path={'/'} element={<PageNovosti />} />
            <Route path={'/kontakty'} element={<PageKontakty />} />
            <Route path={'/oNas'} element={<PageoNas />} />
            <Route path={'/menu'} element={<PageMenuM />} />
            <Route path={'/latte'} element={<PageLatte />} />
            <Route path={'/kapuchino'} element={<PageKapuchino />} />
            <Route path={'/vensky_coffee'} element={<PageVensky_coffee />} />
            <Route path={'/raf_ananas'} element={<PageRaf_ananas />} />
            <Route path={'/raf_kaktus'} element={<PageRaf_kaktus />} />
            <Route path={'/raf_kokos'} element={<PageRaf_kokos />} />
            <Route path={'/medovik'} element={<PageMedovik />} />
            <Route path={'/chizcake'} element={<PageChizcake />} />
            <Route path={'/chocolate'} element={<PageChocolate />} />
          </Routes>
        <PageFooter />
      </BrowserRouter>
    </div>
  )
}

export default App
