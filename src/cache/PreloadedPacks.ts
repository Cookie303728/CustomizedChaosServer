import fs from 'fs';

import Packet from '#/io/Packet.js';

export const PRELOADED = new Map<string, Uint8Array>();
export const PRELOADED_CRC = new Map<string, number>();

export function preloadClient() {
    const allMaps = fs.readdirSync('data/pack/client/maps');
    for (let i = 0; i < allMaps.length; i++) {
        const name = allMaps[i];

        const map = new Uint8Array(fs.readFileSync(`data/pack/client/maps/${name}`));
        const crc = Packet.getcrc(map, 0, map.length);

        PRELOADED.set(name, map);
        PRELOADED_CRC.set(name, crc);
    }

    const allSongs = fs.readdirSync('data/pack/client/songs');
    for (let i = 0; i < allSongs.length; i++) {
        const name = allSongs[i];

        const song = new Uint8Array(fs.readFileSync(`data/pack/client/songs/${name}`));
        const crc = Packet.getcrc(song, 0, song.length);

        PRELOADED.set(name, song);
        PRELOADED_CRC.set(name, crc);
    }

    const allJingles = fs.readdirSync('data/pack/client/jingles');
    for (let i = 0; i < allJingles.length; i++) {
        const name = allJingles[i];

        const jingle = new Uint8Array(fs.readFileSync(`data/pack/client/jingles/${name}`));
        const crc = Packet.getcrc(jingle, 0, jingle.length);

        PRELOADED.set(name, jingle);
        PRELOADED_CRC.set(name, crc);
    }
}
