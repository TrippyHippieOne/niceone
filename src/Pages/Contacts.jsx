import React from "react";
import "../Styles/App.css";

const Contacts = () => {
    return (
        <div className="about_contacts">
            <div className="about__text">
                <div>
                    <div className="contact_name">Brix</div>
                    <div>
                        <div class="social vk">
                            <a
                                href="https://vk.com/michaelbrix"
                                target="_blank"
                            >
                                <i class="fa fa-vk fa-1x"></i>
                            </a>
                        </div>
                    </div>  

                    <p>
                        Mikhail Zuev aka Brix is a Moscow DJ and promoter,
                        resident and leader of the Shift Moscow and NiceOne
                        projects. DJ Brix chose Breaks and 2Step as his main
                        musical directions. Since 2014, Mikhail has been
                        promoting Breakbeat & Bass music in Moscow through his
                        DJ sets and organizing parties at various venues in
                        Moscow and beyond. Performed on the same stage with The
                        Freestylers, Lady Waks, Rasco, Rico Tubbs, Yo Speed,
                        etc. During the existence of the Shift Moscow project,
                        Mikhail has appeared as an invited guest on Megapolis FM
                        radio station in Garage FM and on DFM in the Bassland
                        Show. Breakbeat for DJ Brix is a way of life.
                    </p>
                </div>
                <div>
                    <h1 className="contact_name">
                        Socool
                    </h1>
                    <div class="social vk">
                        <a href="https://vk.com/socooldj" target="_blank">
                            <i style={{ width: "6px" }} class="fa fa-vk fa-1x"></i>
                        </a>
                    </div>

                    <p>
                        Selector from Moscow, real name Andrey, a bright
                        representative of the genre, is actively engaged in the
                        development of breakbeat in Russia, produces mixes for
                        domestic and foreign podcasts, mainly pays attention to
                        the breakbeat of the noughties, has developed his own
                        style, and promotes Nu Skool Breaks to the masses.
                        Co-founder of the Nice One project, resident of Shift
                        Moscow.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
