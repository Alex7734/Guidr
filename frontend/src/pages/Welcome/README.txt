salutare smekere care citesti acest fisier, bine ai venit, prost ai gasit


deci vrei sa faci un marker cu popup

pas 1: 


asta e prima linie   :      const marker(NR) = new mapboxgl.Marker({element: logoMarker_{event}_wrapper}).setLngLat([lng, lat]).addTo(map);


-----> (NR) se refera la numarul markerului  

-----> {event} se refera la event,roadworks,power sau housing



asta e a doua linie :        const popup_{event}(NR) = new mapboxgl.Popup({ closeOnClick: true, closeButton: true}).setDOMContent(document.createRange().createContextualFragment(ReactDOMServer.renderToString(popupContent_{event}(NR))));



dupa asta apare mai sus:    

//
const popupContent_{event}(NR) = (
    <div className={styles.popup}>
        <p className={styles.popup{Event}P1}>Titlu</p>
        <p className={styles.popup{Event}P2}>Desription</p>
    </div>
);
//




dupa faci asta sa apara markeru :        marker(NR).setPopup(popup_{event}(NR));


si dupa la tre sters :    marker(NR).remove();
