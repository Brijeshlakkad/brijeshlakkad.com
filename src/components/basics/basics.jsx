import React from "react";
import Box from "../box/box";

export function BasicsComponent({ email, image, label, location, name, profiles, website }) {
    return (
        <Box className="header">
            <h1>{name}</h1>
            <h3 className="label">{label}</h3>
            <div className="contact-header">
                <span>{location.city}</span>
                <br />
            </div>
            <div id="contact">
                <br />
                <div className="contact-header">
                    EMAIL <span className="responsive-hidden">&bull;</span> <span className="responsive-show"><br /></span><a
                        href={`mailto:${email}`} target={"_blank"} rel="noreferrer">{email}</a> <span
                            className="responsive-show"><br /><br /></span>
                </div>
                {website && <div className="contact-header">
                    WEBSITE <span className="responsive-hidden">&bull;</span> <span className="responsive-show"><br /></span><a
                        href={website} target={"_blank"} rel="noreferrer">{website}</a> <span
                            className="responsive-show"><br /><br /></span>
                </div>}
            </div>
            <br />
            <div id="profiles">
                <div className="contact-header">PROFILES</div><br />
                <div>
                    {
                        profiles.map((profile, index) => {
                            return <p className="profile" key={`profile-${index}`}><a href={profile.url} target={"_blank"} rel="noreferrer"
                                className="profile">{profile.network}</a></p>
                        })
                    }
                </div>
            </div>
        </Box>
    )
}