import GameState from "../GameState";
import IMapGen from "./IMapGen";
import * as C from "../Constants";
import HexCell, { DownStairs, Floor } from "../HexCell";
import HexArray from "../HexArray";
import Assets from "../Assets";
import { GetRing } from "../Hex";
import Point from "../../common/position/Point";
import Giant from "../entities/Giant";
import Archer from "../entities/Archer";

export default class Floor12Gen implements IMapGen {
    generateMap(assets: Assets, floor: number, state: GameState): void {
        state.tiles = new HexArray<HexCell>(C.MAP_SIZE, new Floor(assets));
        state.tiles.set(new DownStairs(assets), 0, 0);
        const ring = GetRing(2);
        for (let i = 0; i < ring.length; i++) {
            state.tiles.set(new Floor(assets, new Point(12, 0)), ring[i]);
        }

        state.enemies.push(new Giant(new Point(0, 0)));
        state.enemies.push(new Archer(new Point(0, -2)));
        state.enemies.push(new Archer(new Point(2, -2)));
    }
}