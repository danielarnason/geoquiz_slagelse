interface bygningProperties {
    name: string;
}

interface bygningGeometry {
    type: string;
    coordinates: number[][][];
}

export interface bygningFeature {
    type: string;
    properties: bygningProperties;
    geometry: bygningGeometry;
}