import "./App.css";
import { GoHome } from "react-icons/go";
import { GoSearch } from "react-icons/go";
import { IoIosAlbums } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";
import { BiLibrary } from "react-icons/bi";
import { FaListUl } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoChevronBackCircle } from "react-icons/io5";
import { IoChevronForwardCircle } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { FaPlayCircle } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { IoIosShuffle } from "react-icons/io";
import { MdOutlineRepeat } from "react-icons/md";
import { GiMicrophone } from "react-icons/gi";
import { LuPlaySquare } from "react-icons/lu";
import { FaGripLines } from "react-icons/fa";
import { RxSpeakerQuiet } from "react-icons/rx";
import { MdOutlineFitScreen } from "react-icons/md";
import { IoMdResize } from "react-icons/io";
import { MdSkipPrevious } from "react-icons/md";
import { MdOutlinePlayCircle } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";

export default function App() {
  return (
    <div className="playlist">
      <div className="playlist-view">
        <div className="playlist-view-sidebar">
          <div className="playlist-view-sidebar-nav card">
            <ul className="playlist-view-sidebar-nav-list">
              <li className="item">
                <GoHome size="24px" /> Início
              </li>
              <li className="item">
                <GoSearch size="24px" /> Buscar
              </li>
            </ul>
          </div>
          <div className="playlist-view-sidebar-libraries card">
            <div className="libraries-title-container">
              <div className="title">
                <BiLibrary size="24px" /> Sua biblioteca
              </div>
              <div className="add">
                <IoIosAdd size="24px" />
              </div>
            </div>
            <div className="libraries-tags">
              <div className="tag">Playlists</div>
            </div>
            <div className="libraries-search">
              <div className="search">
                <FaSearch />
              </div>
              <div className="recents">
                Recentes <FaListUl />
              </div>
            </div>
            <div className="libraries-playlists-container">
              <ul className="libraries-playlists">
                <li className="item">
                  <div className="image">
                    <img src="https://i.scdn.co/image/ab67706c0000da8435a87db87954f9664b9821ff" />
                  </div>
                  <div className="details">
                    <h1>Aula do Eduardo Velho</h1>
                    <p>Playlist - Eduardo Velho</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="playlist-view-main card">
          <div className="playlist-view-main-navbar">
            <div className="navigation">
              <IoChevronBackCircle size="36px" />
              <IoChevronForwardCircle size="36px" />
            </div>
            <div className="controls">
              <button className="navbar-button">Ver planos Premium</button>
              <button className="navbar-button dark">
                <MdOutlineDownloadForOffline />
                Instalar aplicativo
              </button>
              <button className="navbar-button-circle">
                <FaRegBell />
              </button>
              <button className="navbar-button-circle">
                <div className="navbar-user">E</div>
              </button>
            </div>
          </div>
          <div className="playlist-view-main-header">
            <div className="image">
              <img src="https://i.scdn.co/image/ab67706c0000da8435a87db87954f9664b9821ff" />
            </div>
            <div className="details">
              <span className="pretitle">Playlist</span>
              <h1 className="title">Aula do Eduardo Velho</h1>
              <p className="details-a">Eduardo Velho - 5 curtidas</p>
              <p className="details-b">9 músicas, 39min 39 s</p>
            </div>
          </div>
          <div className="playlist-view-main-content">
            <div className="playlist-view-main-content-play">
              <FaPlayCircle size="48px" />
            </div>
            <div className="playlist-tracks-container">
              <div className="playlist-tracks-header">
                <div className="track">#</div>
                <div className="title">Título</div>
                <div className="album">Álbum</div>
                <div className="created-at">Adicionada em</div>
                <div className="duration">
                  <FaRegClock />
                </div>
              </div>
              <div className="playlist-tracks-item">
                <div className="track">1</div>
                <div className="title">
                  <div className="image">
                    <img
                      src="https://fastly.picsum.photos/id/688/48/48.jpg?hmac=8AAfGTszJ1h8j9FPVCLVkNuH0WhT7F8Orxr4uZX6fqo"
                      alt=""
                    />
                  </div>
                  <div className="details">
                    <h1 className="track-name">Tamo aí na atividade</h1>
                    <p className="artist">Charlie Brown JR</p>
                  </div>
                </div>
                <div className="album">Tamo aí na atividade</div>
                <div className="created-at">há uma semana</div>
                <div className="duration">4:15</div>
              </div>
              <div className="playlist-tracks-item">
                <div className="track">2</div>
                <div className="title">
                  <div className="image">
                    <img
                      src="https://fastly.picsum.photos/id/179/48/48.jpg?hmac=MViyybwYKcYSURSwd4u2ncrFFvz4Npm1yibWdsTdXQE"
                      alt=""
                    />
                  </div>
                  <div className="details">
                    <h1 className="track-name">Lugar ao Sol</h1>
                    <p className="artist">Charlie Brown JR</p>
                  </div>
                </div>
                <div className="album">100% Charlie Brown JR</div>
                <div className="created-at">há uma semana</div>
                <div className="duration">3:12</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="playlist-bar">
        <div className="playlist-bar-track">
          <div className="image">
            <img
              src="https://fastly.picsum.photos/id/959/48/48.jpg?hmac=qkHlj8qIFfI2Q2bG_HAqwJigAdCUXfCrIscwQ3N9rfs"
              alt=""
            />
          </div>
          <div className="track">
            <h1 className="title">Du Hast</h1>
            <p className="artist">Rammstein</p>
          </div>
          <div className="like">
            <FaRegHeart size="18" />
          </div>
        </div>
        <div className="playlist-bar-controls">
          <div className="controls">
            <IoIosShuffle size="28px" />
            <MdSkipPrevious size="28px" />
            <MdOutlinePlayCircle size="36px" />
            <MdSkipNext size="28px" />
            <MdOutlineRepeat size="28px" />
          </div>
          <div className="track-length"></div>
        </div>
        <div className="playlist-bar-options">
          <LuPlaySquare size="22px" />
          <GiMicrophone size="22px" />
          <FaGripLines size="22px" />
          <RxSpeakerQuiet size="22px" />
          <MdOutlineFitScreen size="22px" />
          <IoMdResize size="22px" />
        </div>
      </div>
    </div>
  );
}
