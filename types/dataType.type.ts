export interface ProductListInfo {
    name: string,
    price: string
};

export interface BaseProductInfo {
    name: string,
    desc: string,
    price: string,
    brand: string
}

export interface ReplacementPartInfo extends BaseProductInfo {
    oeType: string, //OE, OEM, OES
    code: string,
    type: string,
    useWithModel: string
};

export interface PeripheralsInfo extends BaseProductInfo {
    type: string,
    useWithTrackter: string
};

export interface EngineInfo extends BaseProductInfo {
    series: string,
    model: string,
    power: string,
    startingSystem: string
};

export interface WalkBehindTractorInfo extends BaseProductInfo {
    power: string,
    model: string,
    engineBrand: string
};

export interface TrackterInfo extends BaseProductInfo {
    model: string,
    power: string,
    driveTrain: string
};