import { ExifDateTime } from 'exiftool-vendored';

export type SourceMeta = {
    _ctor?: string;
    AudioBitsPerSample?: number;
    AudioChannels?: number;
    AudioFormat?: string;
    AudioSampleRate?: number;
    AvgBitrate?: string;
    Balance?: number;
    BitDepth?: number;
    CompressorID?: string;
    CompatibleBrands?: string[];
    CreateDate?: string | ExifDateTime | undefined;
    CurrentTime?: string;
    Directory?: string;
    Duration?: number;
    Encoder?: string;
    errors?: string[] | undefined;
    ExifToolVersion?: number;
    FileCreateDate?: string | ExifDateTime | undefined;
    FileAccessDate?: string | ExifDateTime | undefined;
    FileName?: string;
    FileModifyDate?: string | ExifDateTime | undefined;
    FilePermissions?: string;
    FileSize?: string;
    FileType?: string;
    FileTypeExtension?: string;
    GraphicsMode?: string;
    HandlerDescription?: string;
    HandlerType?: string;
    HandlerVendorID?: string;
    hour?: number;
    ImageHeight?: number;
    ImageSize?: string;
    ImageWidth?: number;
    inferredZone?: boolean;
    MajorBrand?: string;
    MatrixStructure?: string;
    MediaCreateDate?: string | ExifDateTime | undefined;
    MediaDataOffset?: number;
    MediaDataSize?: number;
    MediaDuration?: number;
    MediaHeaderVersion?: number;
    MediaLanguageCode?: string;
    MediaModifyDate?: string | ExifDateTime | undefined;
    MediaTimeScale?: number;
    Megapixels?: number;
    MIMEType?: string;
    MinorVersion?: string;
    minute?: number;
    ModifyDate?: string | ExifDateTime | undefined;
    month?: number;
    MovieHeaderVersion?: number;
    NextTrackID?: number;
    OpColor?: string;
    PixelAspectRatio?: number | undefined;
    PosterTime?: string;
    PreferredRate?: number;
    PreferredVolume?: string;
    PreviewDuration?: number;
    PreviewTime?: string;
    rawValue?: string;
    Rotation?: number;
    second?: number;
    SelectionDuration?: number;
    SelectionTime?: string;
    SourceFile?: string | undefined;
    SourceImageHeight?: number;
    SourceImageWidth?: number;
    TimeScale?: number;
    TrackCreateDate?: string | ExifDateTime | undefined;
    TrackDuration?: number;
    TrackHeaderVersion?: number;
    TrackID?: number;
    TrackLayer?: number;
    TrackModifyDate?: string | ExifDateTime | undefined;
    TrackVolume?: string;
    tz?: string;
    tzSource?: string;
    VideoFrameRate?: string | undefined;
    warnings?: any[];
    XResolution?: number;
    year?: number;
    YResolution?: number;
    zoneName?: string;
}

