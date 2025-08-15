// Yandex maps

/* import { YMaps, Map } from "@pbe/react-yandex-maps";
import "./ymap.css";


const Ymap = () => {
  return (
    <YMaps>
      <Map
        defaultState={{ center: [59.93818, 30.365644], zoom: 12 }}
        className="componentMap"
      />
    </YMaps>
  )
}

export default Ymap; */

// GOOGLE MAPS

const Ymap = () => {
  return (
    <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d56577.263036839!2d30.365644!3d59.93818!!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1710000000000!5m2!1sru!2sru"
    width="100%"
    height="100%"
    borderradius="15px"
    overflow="hidden"
    frameBorder="0"
    allowFullScreen=""
    aria-hidden="false"
    tabIndex="0"
    className="map"
  ></iframe>
  )
}

export default Ymap;

// 2GIS - тестовый период до 24.08.2025

/* import React, { useEffect } from 'react';
import { load } from '@2gis/mapgl';

const Ymap = () => {
    useEffect(() => {
        let map;
        load().then((mapglAPI) => {
            map = new mapglAPI.Map('map-container', {
                center: [30.365644, 59.93818],
                zoom: 13,
                key: 'd6260b53-d8c0-49ff-8fe7-632c3721a453',
            });
        });

        // Удаляем карту при размонтировании компонента
        return () => map && map.destroy();
    }, []);

    return (
        <div style={{ width: '100%', height: '100%'}}>
            <div id="map-container" style={{ width: '100%', height: '100%', borderRadius: '10px', overflow: 'hidden'}}></div>
        </div>
    );
};

export default Ymap;  */