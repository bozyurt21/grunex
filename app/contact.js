function ContactContainer() {
    return (
        <div className="contact-container">
            
            <div className="contact-info">
                <h3>İletişim</h3>
                <p><strong><i class="bi bi-envelope-at-fill"></i></strong> hakan.topal@gurnex.com.tr</p>
                <p><strong><i class="bi bi-telephone-fill"></i></strong> 0 534 735 72 88</p>
                <p><strong><i class="bi bi-geo-alt"></i></strong> Veysel Karani Mah. Çolakoğlu Sok. Rings Rezidans No:10/18 Sancaktepe / İstanbul</p>
            </div>

            <div className="map-container">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.3927489080525!2d29.240131599999998!3d40.972879999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad19bb0ec74cd%3A0x841237b0759f4a32!2sRings%20Rezidans!5e0!3m2!1str!2str!4v1739179570748!5m2!1str!2str" 
                    allowFullScreen=""
                    loading="lazy">
                </iframe>
            </div>
        </div>
    );
}

// Render React Component into HTML
ReactDOM.render(<ContactContainer />, document.getElementById("contact-root"));

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.3927489080525!2d29.240131599999998!3d40.972879999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad19bb0ec74cd%3A0x841237b0759f4a32!2sRings%20Rezidans!5e0!3m2!1str!2str!4v1739179570748!5m2!1str!2str" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>