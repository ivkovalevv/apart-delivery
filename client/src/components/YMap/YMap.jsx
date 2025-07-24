import { YMaps, Map } from "@pbe/react-yandex-maps";
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


export default Ymap;

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