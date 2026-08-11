const songOfTheMonth = {
    title: "first death",
    artist: "Toru Kitajima",
    year: 2022,
    albumCover: "https://static.wikia.nocookie.net/jpop/images/0/0e/FD_Limited.jpeg/revision/latest?cb=20221129213711",
    spotifyLink: "https://open.spotify.com/track/0ky07Oq85l9zx7e427XGgC?si=d0556b0f20394acf",
};

export const pastSongs = [
    {
        month: "April 2026",
        title: "ホログラム",
        artist: "NICO Touches the Walls",
        year: 2009,
        albumCover: "https://m.media-amazon.com/images/I/51F0PNkAXxL._UF1000,1000_QL80_.jpg",
        spotifyLink: "https://open.spotify.com/track/3yQACgMuy2G7EXCTeGtjlt?si=014dfedc767a4375",
    },
    {
        month: "March 2026",
        title: "AIZO",
        artist: "King Gnu",
        year: 2026,
        albumCover: "https://images.genius.com/eeb78af7029205bf5a2eabf4f751113a.1000x1000x1.png",
        spotifyLink: "https://open.spotify.com/track/65X2koe1LhDgQmRkNdJFv9?si=89b02214edfc487d",
    },
    {
        month: "February 2026",
        title: "Vivid Vice",
        artist: "Who-ya Extended",
        year: 2021,
        albumCover: "https://upload.wikimedia.org/wikipedia/en/7/7f/Vivid_Vice_-_cover.png",
        spotifyLink: "https://open.spotify.com/track/4R6yPy83vDEZtwJsBavUfo?si=0cfa0ac464164378",
    }
];

import Image from "next/image";

const spotifyImage = "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png";
const vinylDiskBase = "https://www.urpressing.com/wp-content/uploads/2025/07/O-1_Black_P8722-e1754590337855-900x900.png";

export default function SOTM() {
    return (
        <a
            href={songOfTheMonth.spotifyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
        >
            <div className="relative h-80 w-full max-w-160 overflow-hidden rounded-2xl bg-black shadow-xl border border-white/25">
                {/* Background */}
                <div
                    className="absolute inset-0 opacity-85 bg-cover bg-center blur-lg transition-all"
                />

                <Image
                    src={songOfTheMonth.albumCover}
                    alt="Album cover"
                    className="absolute inset-0 h-full w-full object-cover opacity-75 blur-sm transition-all"
                    width={400}
                    height={400}
                />
                <div className="absolute inset-0 bg-background/50" />

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col justify-between p-6">
                    {/* Header */}
                    <div className="flex items-center gap-3">
                        <Image src={spotifyImage} alt="Spotify" width={24} height={24} />
                        <div>
                            <p className="text-sm uppercase tracking-wide text-foreground/75">
                                RECENTLY PLAYED SONG
                            </p>
                            <p className="text-lg font-medium text-foreground">
                                <span className="font-semibold">
                                    {songOfTheMonth.title}
                                </span>
                                {" "}
                                by
                                {" "}
                                <span className="font-semibold">
                                    {songOfTheMonth.artist}
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Vinyl + Cover */}
                    <div className="relative mx-auto h-[150px] w-[150px]">
                        {/* Vinyl */}
                        <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-10">
                            <div className="relative h-full w-full">
                                <Image
                                    src={vinylDiskBase}
                                    alt="Vinyl"
                                    className="absolute h-full w-full rounded-full"
                                    width={150}
                                    height={150}
                                />

                                {/* Center label */}
                                <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full">
                                    <Image
                                        src={songOfTheMonth.albumCover}
                                        alt="Album"
                                        className="h-full w-full object-cover"
                                        width={64}
                                        height={64}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Album cover */}
                        <div className="absolute left-1/2 top-1/3 z-10 h-[200px] w-[200px] -translate-x-1/2 overflow-hidden rounded-md shadow-2xl transition-transform duration-500 group-hover:translate-y-5">
                            <Image
                                src={songOfTheMonth.albumCover}
                                alt="Album cover"
                                className="h-full w-full object-cover"
                                width={200}
                                height={200}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
}