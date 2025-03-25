var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Merge_Toposheet_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Merge_Toposheet",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Merge_Toposheet_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8094779.747767, 2154935.853440, 8154152.423899, 2213892.058980]
                            })
                        });
var lyr_BNCMC_Final_map_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "BNCMC_Final_map",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BNCMC_Final_map_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8129175.056570, 2185589.498042, 8138646.262560, 2193375.588905]
                            })
                        });
var lyr_MBMC_Clip_Map_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "MBMC_Clip_Map",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/MBMC_Clip_Map_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8101130.463157, 2180716.301588, 8120043.665237, 2194637.809779]
                            })
                        });
var format_Grid_SHP_4 = new ol.format.GeoJSON();
var features_Grid_SHP_4 = format_Grid_SHP_4.readFeatures(json_Grid_SHP_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Grid_SHP_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grid_SHP_4.addFeatures(features_Grid_SHP_4);
var lyr_Grid_SHP_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Grid_SHP_4, 
                style: style_Grid_SHP_4,
                popuplayertitle: "Grid_SHP",
                interactive: true,
                    title: '<img src="styles/legend/Grid_SHP_4.png" /> Grid_SHP'
                });
var format_MurvaWaterStation_5 = new ol.format.GeoJSON();
var features_MurvaWaterStation_5 = format_MurvaWaterStation_5.readFeatures(json_MurvaWaterStation_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MurvaWaterStation_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MurvaWaterStation_5.addFeatures(features_MurvaWaterStation_5);
var lyr_MurvaWaterStation_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MurvaWaterStation_5, 
                style: style_MurvaWaterStation_5,
                popuplayertitle: "Murva Water Station",
                interactive: true,
                    title: '<img src="styles/legend/MurvaWaterStation_5.png" /> Murva Water Station'
                });
var format_KashmiraWaterStation_6 = new ol.format.GeoJSON();
var features_KashmiraWaterStation_6 = format_KashmiraWaterStation_6.readFeatures(json_KashmiraWaterStation_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KashmiraWaterStation_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KashmiraWaterStation_6.addFeatures(features_KashmiraWaterStation_6);
var lyr_KashmiraWaterStation_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KashmiraWaterStation_6, 
                style: style_KashmiraWaterStation_6,
                popuplayertitle: "Kashmira Water Station",
                interactive: true,
                    title: '<img src="styles/legend/KashmiraWaterStation_6.png" /> Kashmira Water Station'
                });
var format_KashimiraWaterTank_7 = new ol.format.GeoJSON();
var features_KashimiraWaterTank_7 = format_KashimiraWaterTank_7.readFeatures(json_KashimiraWaterTank_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KashimiraWaterTank_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KashimiraWaterTank_7.addFeatures(features_KashimiraWaterTank_7);
var lyr_KashimiraWaterTank_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KashimiraWaterTank_7, 
                style: style_KashimiraWaterTank_7,
                popuplayertitle: "Kashimira Water Tank",
                interactive: true,
                    title: '<img src="styles/legend/KashimiraWaterTank_7.png" /> Kashimira Water Tank'
                });
var format_ChinaWaterStation_8 = new ol.format.GeoJSON();
var features_ChinaWaterStation_8 = format_ChinaWaterStation_8.readFeatures(json_ChinaWaterStation_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChinaWaterStation_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChinaWaterStation_8.addFeatures(features_ChinaWaterStation_8);
var lyr_ChinaWaterStation_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChinaWaterStation_8, 
                style: style_ChinaWaterStation_8,
                popuplayertitle: "China Water Station",
                interactive: true,
                    title: '<img src="styles/legend/ChinaWaterStation_8.png" /> China Water Station'
                });
var format_ChinaVillageWaterTank_9 = new ol.format.GeoJSON();
var features_ChinaVillageWaterTank_9 = format_ChinaVillageWaterTank_9.readFeatures(json_ChinaVillageWaterTank_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChinaVillageWaterTank_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChinaVillageWaterTank_9.addFeatures(features_ChinaVillageWaterTank_9);
var lyr_ChinaVillageWaterTank_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChinaVillageWaterTank_9, 
                style: style_ChinaVillageWaterTank_9,
                popuplayertitle: "China Village Water Tank",
                interactive: true,
                    title: '<img src="styles/legend/ChinaVillageWaterTank_9.png" /> China Village Water Tank'
                });
var format_MiraMIDCWaterTank_10 = new ol.format.GeoJSON();
var features_MiraMIDCWaterTank_10 = format_MiraMIDCWaterTank_10.readFeatures(json_MiraMIDCWaterTank_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MiraMIDCWaterTank_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MiraMIDCWaterTank_10.addFeatures(features_MiraMIDCWaterTank_10);
var lyr_MiraMIDCWaterTank_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MiraMIDCWaterTank_10, 
                style: style_MiraMIDCWaterTank_10,
                popuplayertitle: "Mira MIDC Water Tank",
                interactive: true,
                    title: '<img src="styles/legend/MiraMIDCWaterTank_10.png" /> Mira MIDC Water Tank'
                });
var format_MiraMIDCWaterStation_11 = new ol.format.GeoJSON();
var features_MiraMIDCWaterStation_11 = format_MiraMIDCWaterStation_11.readFeatures(json_MiraMIDCWaterStation_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MiraMIDCWaterStation_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MiraMIDCWaterStation_11.addFeatures(features_MiraMIDCWaterStation_11);
var lyr_MiraMIDCWaterStation_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MiraMIDCWaterStation_11, 
                style: style_MiraMIDCWaterStation_11,
                popuplayertitle: "Mira MIDC Water Station",
                interactive: true,
                    title: '<img src="styles/legend/MiraMIDCWaterStation_11.png" /> Mira MIDC Water Station'
                });
var format_MiraGavWaterStation_12 = new ol.format.GeoJSON();
var features_MiraGavWaterStation_12 = format_MiraGavWaterStation_12.readFeatures(json_MiraGavWaterStation_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MiraGavWaterStation_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MiraGavWaterStation_12.addFeatures(features_MiraGavWaterStation_12);
var lyr_MiraGavWaterStation_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MiraGavWaterStation_12, 
                style: style_MiraGavWaterStation_12,
                popuplayertitle: "Mira Gav Water Station",
                interactive: true,
                    title: '<img src="styles/legend/MiraGavWaterStation_12.png" /> Mira Gav Water Station'
                });
var format_MiraGavWaterTank_13 = new ol.format.GeoJSON();
var features_MiraGavWaterTank_13 = format_MiraGavWaterTank_13.readFeatures(json_MiraGavWaterTank_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MiraGavWaterTank_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MiraGavWaterTank_13.addFeatures(features_MiraGavWaterTank_13);
var lyr_MiraGavWaterTank_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MiraGavWaterTank_13, 
                style: style_MiraGavWaterTank_13,
                popuplayertitle: "Mira Gav Water Tank",
                interactive: true,
                    title: '<img src="styles/legend/MiraGavWaterTank_13.png" /> Mira Gav Water Tank'
                });
var format_DongriWaterTank_14 = new ol.format.GeoJSON();
var features_DongriWaterTank_14 = format_DongriWaterTank_14.readFeatures(json_DongriWaterTank_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DongriWaterTank_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DongriWaterTank_14.addFeatures(features_DongriWaterTank_14);
var lyr_DongriWaterTank_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DongriWaterTank_14, 
                style: style_DongriWaterTank_14,
                popuplayertitle: "Dongri Water Tank",
                interactive: true,
                    title: '<img src="styles/legend/DongriWaterTank_14.png" /> Dongri Water Tank'
                });
var format_DongriWaterStation_15 = new ol.format.GeoJSON();
var features_DongriWaterStation_15 = format_DongriWaterStation_15.readFeatures(json_DongriWaterStation_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DongriWaterStation_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DongriWaterStation_15.addFeatures(features_DongriWaterStation_15);
var lyr_DongriWaterStation_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DongriWaterStation_15, 
                style: style_DongriWaterStation_15,
                popuplayertitle: "Dongri Water Station",
                interactive: true,
                    title: '<img src="styles/legend/DongriWaterStation_15.png" /> Dongri Water Station'
                });
var format_MurvaWaterTank_16 = new ol.format.GeoJSON();
var features_MurvaWaterTank_16 = format_MurvaWaterTank_16.readFeatures(json_MurvaWaterTank_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MurvaWaterTank_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MurvaWaterTank_16.addFeatures(features_MurvaWaterTank_16);
var lyr_MurvaWaterTank_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MurvaWaterTank_16, 
                style: style_MurvaWaterTank_16,
                popuplayertitle: "Murva Water Tank",
                interactive: true,
                    title: '<img src="styles/legend/MurvaWaterTank_16.png" /> Murva Water Tank'
                });
var format_PanjuWaterStation_17 = new ol.format.GeoJSON();
var features_PanjuWaterStation_17 = format_PanjuWaterStation_17.readFeatures(json_PanjuWaterStation_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PanjuWaterStation_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PanjuWaterStation_17.addFeatures(features_PanjuWaterStation_17);
var lyr_PanjuWaterStation_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PanjuWaterStation_17, 
                style: style_PanjuWaterStation_17,
                popuplayertitle: "Panju Water Station",
                interactive: true,
                    title: '<img src="styles/legend/PanjuWaterStation_17.png" /> Panju Water Station'
                });
var format_PanjuWaterTank_18 = new ol.format.GeoJSON();
var features_PanjuWaterTank_18 = format_PanjuWaterTank_18.readFeatures(json_PanjuWaterTank_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PanjuWaterTank_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PanjuWaterTank_18.addFeatures(features_PanjuWaterTank_18);
var lyr_PanjuWaterTank_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PanjuWaterTank_18, 
                style: style_PanjuWaterTank_18,
                popuplayertitle: "Panju Water Tank",
                interactive: true,
                    title: '<img src="styles/legend/PanjuWaterTank_18.png" /> Panju Water Tank'
                });
var format_SudamaWaterStation_19 = new ol.format.GeoJSON();
var features_SudamaWaterStation_19 = format_SudamaWaterStation_19.readFeatures(json_SudamaWaterStation_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SudamaWaterStation_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SudamaWaterStation_19.addFeatures(features_SudamaWaterStation_19);
var lyr_SudamaWaterStation_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SudamaWaterStation_19, 
                style: style_SudamaWaterStation_19,
                popuplayertitle: "Sudama Water Station",
                interactive: true,
                    title: '<img src="styles/legend/SudamaWaterStation_19.png" /> Sudama Water Station'
                });
var format_SudamaWaterTank_20 = new ol.format.GeoJSON();
var features_SudamaWaterTank_20 = format_SudamaWaterTank_20.readFeatures(json_SudamaWaterTank_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SudamaWaterTank_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SudamaWaterTank_20.addFeatures(features_SudamaWaterTank_20);
var lyr_SudamaWaterTank_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SudamaWaterTank_20, 
                style: style_SudamaWaterTank_20,
                popuplayertitle: "Sudama Water Tank",
                interactive: true,
                    title: '<img src="styles/legend/SudamaWaterTank_20.png" /> Sudama Water Tank'
                });
var format_GoddevWaterTank_21 = new ol.format.GeoJSON();
var features_GoddevWaterTank_21 = format_GoddevWaterTank_21.readFeatures(json_GoddevWaterTank_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GoddevWaterTank_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GoddevWaterTank_21.addFeatures(features_GoddevWaterTank_21);
var lyr_GoddevWaterTank_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GoddevWaterTank_21, 
                style: style_GoddevWaterTank_21,
                popuplayertitle: "Goddev Water Tank",
                interactive: true,
                    title: '<img src="styles/legend/GoddevWaterTank_21.png" /> Goddev Water Tank'
                });
var format_GoddevWaterStation_22 = new ol.format.GeoJSON();
var features_GoddevWaterStation_22 = format_GoddevWaterStation_22.readFeatures(json_GoddevWaterStation_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GoddevWaterStation_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GoddevWaterStation_22.addFeatures(features_GoddevWaterStation_22);
var lyr_GoddevWaterStation_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GoddevWaterStation_22, 
                style: style_GoddevWaterStation_22,
                popuplayertitle: "Goddev Water Station",
                interactive: true,
                    title: '<img src="styles/legend/GoddevWaterStation_22.png" /> Goddev Water Station'
                });
var format_777WaterTank_23 = new ol.format.GeoJSON();
var features_777WaterTank_23 = format_777WaterTank_23.readFeatures(json_777WaterTank_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_777WaterTank_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_777WaterTank_23.addFeatures(features_777WaterTank_23);
var lyr_777WaterTank_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_777WaterTank_23, 
                style: style_777WaterTank_23,
                popuplayertitle: "777 Water Tank",
                interactive: true,
                    title: '<img src="styles/legend/777WaterTank_23.png" /> 777 Water Tank'
                });
var format_777WaterStation_24 = new ol.format.GeoJSON();
var features_777WaterStation_24 = format_777WaterStation_24.readFeatures(json_777WaterStation_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_777WaterStation_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_777WaterStation_24.addFeatures(features_777WaterStation_24);
var lyr_777WaterStation_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_777WaterStation_24, 
                style: style_777WaterStation_24,
                popuplayertitle: "777 Water Station",
                interactive: true,
                    title: '<img src="styles/legend/777WaterStation_24.png" /> 777 Water Station'
                });
var format_KamlanagarWaterStation_25 = new ol.format.GeoJSON();
var features_KamlanagarWaterStation_25 = format_KamlanagarWaterStation_25.readFeatures(json_KamlanagarWaterStation_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KamlanagarWaterStation_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KamlanagarWaterStation_25.addFeatures(features_KamlanagarWaterStation_25);
var lyr_KamlanagarWaterStation_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KamlanagarWaterStation_25, 
                style: style_KamlanagarWaterStation_25,
                popuplayertitle: "Kamlanagar Water Station",
                interactive: true,
                    title: '<img src="styles/legend/KamlanagarWaterStation_25.png" /> Kamlanagar Water Station'
                });
var format_KamlanagarWaterTank_26 = new ol.format.GeoJSON();
var features_KamlanagarWaterTank_26 = format_KamlanagarWaterTank_26.readFeatures(json_KamlanagarWaterTank_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KamlanagarWaterTank_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KamlanagarWaterTank_26.addFeatures(features_KamlanagarWaterTank_26);
var lyr_KamlanagarWaterTank_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KamlanagarWaterTank_26, 
                style: style_KamlanagarWaterTank_26,
                popuplayertitle: "Kamlanagar Water Tank",
                interactive: true,
                    title: '<img src="styles/legend/KamlanagarWaterTank_26.png" /> Kamlanagar Water Tank'
                });
var format_AsmitaWaterStation_27 = new ol.format.GeoJSON();
var features_AsmitaWaterStation_27 = format_AsmitaWaterStation_27.readFeatures(json_AsmitaWaterStation_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AsmitaWaterStation_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AsmitaWaterStation_27.addFeatures(features_AsmitaWaterStation_27);
var lyr_AsmitaWaterStation_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AsmitaWaterStation_27, 
                style: style_AsmitaWaterStation_27,
                popuplayertitle: "Asmita Water Station",
                interactive: true,
                    title: '<img src="styles/legend/AsmitaWaterStation_27.png" /> Asmita Water Station'
                });
var format_AsmitaWaterTank_28 = new ol.format.GeoJSON();
var features_AsmitaWaterTank_28 = format_AsmitaWaterTank_28.readFeatures(json_AsmitaWaterTank_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AsmitaWaterTank_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AsmitaWaterTank_28.addFeatures(features_AsmitaWaterTank_28);
var lyr_AsmitaWaterTank_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AsmitaWaterTank_28, 
                style: style_AsmitaWaterTank_28,
                popuplayertitle: "Asmita Water Tank",
                interactive: true,
                    title: '<img src="styles/legend/AsmitaWaterTank_28.png" /> Asmita Water Tank'
                });
var format_11NoWaterTank_29 = new ol.format.GeoJSON();
var features_11NoWaterTank_29 = format_11NoWaterTank_29.readFeatures(json_11NoWaterTank_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_11NoWaterTank_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_11NoWaterTank_29.addFeatures(features_11NoWaterTank_29);
var lyr_11NoWaterTank_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_11NoWaterTank_29, 
                style: style_11NoWaterTank_29,
                popuplayertitle: "11 No. Water Tank",
                interactive: true,
                    title: '<img src="styles/legend/11NoWaterTank_29.png" /> 11 No. Water Tank'
                });
var format_SilverWaterStation_30 = new ol.format.GeoJSON();
var features_SilverWaterStation_30 = format_SilverWaterStation_30.readFeatures(json_SilverWaterStation_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SilverWaterStation_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SilverWaterStation_30.addFeatures(features_SilverWaterStation_30);
var lyr_SilverWaterStation_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SilverWaterStation_30, 
                style: style_SilverWaterStation_30,
                popuplayertitle: "Silver Water Station",
                interactive: true,
                    title: '<img src="styles/legend/SilverWaterStation_30.png" /> Silver Water Station'
                });
var format_SilverLineWaterTank_31 = new ol.format.GeoJSON();
var features_SilverLineWaterTank_31 = format_SilverLineWaterTank_31.readFeatures(json_SilverLineWaterTank_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SilverLineWaterTank_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SilverLineWaterTank_31.addFeatures(features_SilverLineWaterTank_31);
var lyr_SilverLineWaterTank_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SilverLineWaterTank_31, 
                style: style_SilverLineWaterTank_31,
                popuplayertitle: "Silver Line Water Tank",
                interactive: true,
                    title: '<img src="styles/legend/SilverLineWaterTank_31.png" /> Silver Line Water Tank'
                });
var format_NavgharWaterTank_32 = new ol.format.GeoJSON();
var features_NavgharWaterTank_32 = format_NavgharWaterTank_32.readFeatures(json_NavgharWaterTank_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NavgharWaterTank_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NavgharWaterTank_32.addFeatures(features_NavgharWaterTank_32);
var lyr_NavgharWaterTank_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NavgharWaterTank_32, 
                style: style_NavgharWaterTank_32,
                popuplayertitle: "Navghar Water Tank",
                interactive: true,
                    title: '<img src="styles/legend/NavgharWaterTank_32.png" /> Navghar Water Tank'
                });
var format_NavgharWaterStation_33 = new ol.format.GeoJSON();
var features_NavgharWaterStation_33 = format_NavgharWaterStation_33.readFeatures(json_NavgharWaterStation_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NavgharWaterStation_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NavgharWaterStation_33.addFeatures(features_NavgharWaterStation_33);
var lyr_NavgharWaterStation_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NavgharWaterStation_33, 
                style: style_NavgharWaterStation_33,
                popuplayertitle: "Navghar Water Station",
                interactive: true,
                    title: '<img src="styles/legend/NavgharWaterStation_33.png" /> Navghar Water Station'
                });
var format_KanakiyaWaterTank_34 = new ol.format.GeoJSON();
var features_KanakiyaWaterTank_34 = format_KanakiyaWaterTank_34.readFeatures(json_KanakiyaWaterTank_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KanakiyaWaterTank_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KanakiyaWaterTank_34.addFeatures(features_KanakiyaWaterTank_34);
var lyr_KanakiyaWaterTank_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KanakiyaWaterTank_34, 
                style: style_KanakiyaWaterTank_34,
                popuplayertitle: "Kanakiya Water Tank",
                interactive: true,
                    title: '<img src="styles/legend/KanakiyaWaterTank_34.png" /> Kanakiya Water Tank'
                });
var format_KanakiyaWaterStation_35 = new ol.format.GeoJSON();
var features_KanakiyaWaterStation_35 = format_KanakiyaWaterStation_35.readFeatures(json_KanakiyaWaterStation_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KanakiyaWaterStation_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KanakiyaWaterStation_35.addFeatures(features_KanakiyaWaterStation_35);
var lyr_KanakiyaWaterStation_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KanakiyaWaterStation_35, 
                style: style_KanakiyaWaterStation_35,
                popuplayertitle: "Kanakiya Water Station",
                interactive: true,
                    title: '<img src="styles/legend/KanakiyaWaterStation_35.png" /> Kanakiya Water Station'
                });
var format_GodibunderWaterStation_36 = new ol.format.GeoJSON();
var features_GodibunderWaterStation_36 = format_GodibunderWaterStation_36.readFeatures(json_GodibunderWaterStation_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GodibunderWaterStation_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GodibunderWaterStation_36.addFeatures(features_GodibunderWaterStation_36);
var lyr_GodibunderWaterStation_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GodibunderWaterStation_36, 
                style: style_GodibunderWaterStation_36,
                popuplayertitle: "Godibunder Water Station",
                interactive: true,
                    title: '<img src="styles/legend/GodibunderWaterStation_36.png" /> Godibunder Water Station'
                });
var format_GodibunderWaterTank_37 = new ol.format.GeoJSON();
var features_GodibunderWaterTank_37 = format_GodibunderWaterTank_37.readFeatures(json_GodibunderWaterTank_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GodibunderWaterTank_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GodibunderWaterTank_37.addFeatures(features_GodibunderWaterTank_37);
var lyr_GodibunderWaterTank_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GodibunderWaterTank_37, 
                style: style_GodibunderWaterTank_37,
                popuplayertitle: "Godibunder Water Tank",
                interactive: true,
                    title: '<img src="styles/legend/GodibunderWaterTank_37.png" /> Godibunder Water Tank'
                });
var format_PatlipadaStemOffice_38 = new ol.format.GeoJSON();
var features_PatlipadaStemOffice_38 = format_PatlipadaStemOffice_38.readFeatures(json_PatlipadaStemOffice_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PatlipadaStemOffice_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PatlipadaStemOffice_38.addFeatures(features_PatlipadaStemOffice_38);
var lyr_PatlipadaStemOffice_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PatlipadaStemOffice_38, 
                style: style_PatlipadaStemOffice_38,
                popuplayertitle: "Patlipada Stem Office",
                interactive: true,
                    title: '<img src="styles/legend/PatlipadaStemOffice_38.png" /> Patlipada Stem Office'
                });
var format_PatlipadaWaterTank_39 = new ol.format.GeoJSON();
var features_PatlipadaWaterTank_39 = format_PatlipadaWaterTank_39.readFeatures(json_PatlipadaWaterTank_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PatlipadaWaterTank_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PatlipadaWaterTank_39.addFeatures(features_PatlipadaWaterTank_39);
var lyr_PatlipadaWaterTank_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PatlipadaWaterTank_39, 
                style: style_PatlipadaWaterTank_39,
                popuplayertitle: "Patlipada Water Tank",
                interactive: true,
                    title: '<img src="styles/legend/PatlipadaWaterTank_39.png" /> Patlipada Water Tank'
                });
var format_PumpStation_40 = new ol.format.GeoJSON();
var features_PumpStation_40 = format_PumpStation_40.readFeatures(json_PumpStation_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PumpStation_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PumpStation_40.addFeatures(features_PumpStation_40);
var lyr_PumpStation_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PumpStation_40, 
                style: style_PumpStation_40,
                popuplayertitle: "Pump Station",
                interactive: true,
                    title: '<img src="styles/legend/PumpStation_40.png" /> Pump Station'
                });
var format_PhataFillingStation_41 = new ol.format.GeoJSON();
var features_PhataFillingStation_41 = format_PhataFillingStation_41.readFeatures(json_PhataFillingStation_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PhataFillingStation_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PhataFillingStation_41.addFeatures(features_PhataFillingStation_41);
var lyr_PhataFillingStation_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PhataFillingStation_41, 
                style: style_PhataFillingStation_41,
                popuplayertitle: "Phata Filling Station",
                interactive: true,
                    title: '<img src="styles/legend/PhataFillingStation_41.png" /> Phata Filling Station'
                });
var format_Stem_MBR15ML_42 = new ol.format.GeoJSON();
var features_Stem_MBR15ML_42 = format_Stem_MBR15ML_42.readFeatures(json_Stem_MBR15ML_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stem_MBR15ML_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stem_MBR15ML_42.addFeatures(features_Stem_MBR15ML_42);
var lyr_Stem_MBR15ML_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stem_MBR15ML_42, 
                style: style_Stem_MBR15ML_42,
                popuplayertitle: "Stem_MBR 15ML",
                interactive: true,
                    title: '<img src="styles/legend/Stem_MBR15ML_42.png" /> Stem_MBR 15ML'
                });
var format_StemMBR_43 = new ol.format.GeoJSON();
var features_StemMBR_43 = format_StemMBR_43.readFeatures(json_StemMBR_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StemMBR_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StemMBR_43.addFeatures(features_StemMBR_43);
var lyr_StemMBR_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StemMBR_43, 
                style: style_StemMBR_43,
                popuplayertitle: "Stem MBR",
                interactive: true,
                    title: '<img src="styles/legend/StemMBR_43.png" /> Stem MBR'
                });
var format_Road_44 = new ol.format.GeoJSON();
var features_Road_44 = format_Road_44.readFeatures(json_Road_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_44.addFeatures(features_Road_44);
var lyr_Road_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Road_44, 
                style: style_Road_44,
                popuplayertitle: "Road",
                interactive: true,
                    title: '<img src="styles/legend/Road_44.png" /> Road'
                });
var format_UlhasRiver_45 = new ol.format.GeoJSON();
var features_UlhasRiver_45 = format_UlhasRiver_45.readFeatures(json_UlhasRiver_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UlhasRiver_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UlhasRiver_45.addFeatures(features_UlhasRiver_45);
var lyr_UlhasRiver_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UlhasRiver_45, 
                style: style_UlhasRiver_45,
                popuplayertitle: "Ulhas River",
                interactive: true,
                    title: '<img src="styles/legend/UlhasRiver_45.png" /> Ulhas River'
                });
var format_CLF_46 = new ol.format.GeoJSON();
var features_CLF_46 = format_CLF_46.readFeatures(json_CLF_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CLF_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLF_46.addFeatures(features_CLF_46);
var lyr_CLF_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLF_46, 
                style: style_CLF_46,
                popuplayertitle: "CLF",
                interactive: true,
                    title: '<img src="styles/legend/CLF_46.png" /> CLF'
                });
var format_StemInfrastructure_47 = new ol.format.GeoJSON();
var features_StemInfrastructure_47 = format_StemInfrastructure_47.readFeatures(json_StemInfrastructure_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StemInfrastructure_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StemInfrastructure_47.addFeatures(features_StemInfrastructure_47);
var lyr_StemInfrastructure_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StemInfrastructure_47, 
                style: style_StemInfrastructure_47,
                popuplayertitle: "Stem Infrastructure",
                interactive: true,
                    title: '<img src="styles/legend/StemInfrastructure_47.png" /> Stem Infrastructure'
                });
var format_TMCWTP_48 = new ol.format.GeoJSON();
var features_TMCWTP_48 = format_TMCWTP_48.readFeatures(json_TMCWTP_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TMCWTP_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TMCWTP_48.addFeatures(features_TMCWTP_48);
var lyr_TMCWTP_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TMCWTP_48, 
                style: style_TMCWTP_48,
                popuplayertitle: "TMC WTP",
                interactive: true,
                    title: '<img src="styles/legend/TMCWTP_48.png" /> TMC WTP'
                });
var format_Waterline_49 = new ol.format.GeoJSON();
var features_Waterline_49 = format_Waterline_49.readFeatures(json_Waterline_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waterline_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waterline_49.addFeatures(features_Waterline_49);
var lyr_Waterline_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waterline_49, 
                style: style_Waterline_49,
                popuplayertitle: "Waterline",
                interactive: true,
                    title: '<img src="styles/legend/Waterline_49.png" /> Waterline'
                });
var format_MBMC_Ward_Boundry_50 = new ol.format.GeoJSON();
var features_MBMC_Ward_Boundry_50 = format_MBMC_Ward_Boundry_50.readFeatures(json_MBMC_Ward_Boundry_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBMC_Ward_Boundry_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBMC_Ward_Boundry_50.addFeatures(features_MBMC_Ward_Boundry_50);
var lyr_MBMC_Ward_Boundry_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MBMC_Ward_Boundry_50, 
                style: style_MBMC_Ward_Boundry_50,
                popuplayertitle: "MBMC_Ward_Boundry",
                interactive: true,
                    title: '<img src="styles/legend/MBMC_Ward_Boundry_50.png" /> MBMC_Ward_Boundry'
                });
var format_BNCMCWardBoundry_51 = new ol.format.GeoJSON();
var features_BNCMCWardBoundry_51 = format_BNCMCWardBoundry_51.readFeatures(json_BNCMCWardBoundry_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BNCMCWardBoundry_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BNCMCWardBoundry_51.addFeatures(features_BNCMCWardBoundry_51);
var lyr_BNCMCWardBoundry_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BNCMCWardBoundry_51, 
                style: style_BNCMCWardBoundry_51,
                popuplayertitle: "BNCMC Ward Boundry",
                interactive: true,
                    title: '<img src="styles/legend/BNCMCWardBoundry_51.png" /> BNCMC Ward Boundry'
                });
var format_STEM_Village_DB_52 = new ol.format.GeoJSON();
var features_STEM_Village_DB_52 = format_STEM_Village_DB_52.readFeatures(json_STEM_Village_DB_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STEM_Village_DB_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STEM_Village_DB_52.addFeatures(features_STEM_Village_DB_52);
var lyr_STEM_Village_DB_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_STEM_Village_DB_52, 
                style: style_STEM_Village_DB_52,
                popuplayertitle: "STEM_Village_DB",
                interactive: true,
                    title: '<img src="styles/legend/STEM_Village_DB_52.png" /> STEM_Village_DB'
                });
var group_WTPTemghar = new ol.layer.Group({
                                layers: [lyr_CLF_46,lyr_StemInfrastructure_47,lyr_TMCWTP_48,],
                                fold: "open",
                                title: "WTP Temghar"});

lyr_GoogleSatellite_0.setVisible(true);lyr_Merge_Toposheet_1.setVisible(true);lyr_BNCMC_Final_map_2.setVisible(true);lyr_MBMC_Clip_Map_3.setVisible(true);lyr_Grid_SHP_4.setVisible(true);lyr_MurvaWaterStation_5.setVisible(true);lyr_KashmiraWaterStation_6.setVisible(true);lyr_KashimiraWaterTank_7.setVisible(true);lyr_ChinaWaterStation_8.setVisible(true);lyr_ChinaVillageWaterTank_9.setVisible(true);lyr_MiraMIDCWaterTank_10.setVisible(true);lyr_MiraMIDCWaterStation_11.setVisible(true);lyr_MiraGavWaterStation_12.setVisible(true);lyr_MiraGavWaterTank_13.setVisible(true);lyr_DongriWaterTank_14.setVisible(true);lyr_DongriWaterStation_15.setVisible(true);lyr_MurvaWaterTank_16.setVisible(true);lyr_PanjuWaterStation_17.setVisible(true);lyr_PanjuWaterTank_18.setVisible(true);lyr_SudamaWaterStation_19.setVisible(true);lyr_SudamaWaterTank_20.setVisible(true);lyr_GoddevWaterTank_21.setVisible(true);lyr_GoddevWaterStation_22.setVisible(true);lyr_777WaterTank_23.setVisible(true);lyr_777WaterStation_24.setVisible(true);lyr_KamlanagarWaterStation_25.setVisible(true);lyr_KamlanagarWaterTank_26.setVisible(true);lyr_AsmitaWaterStation_27.setVisible(true);lyr_AsmitaWaterTank_28.setVisible(true);lyr_11NoWaterTank_29.setVisible(true);lyr_SilverWaterStation_30.setVisible(true);lyr_SilverLineWaterTank_31.setVisible(true);lyr_NavgharWaterTank_32.setVisible(true);lyr_NavgharWaterStation_33.setVisible(true);lyr_KanakiyaWaterTank_34.setVisible(true);lyr_KanakiyaWaterStation_35.setVisible(true);lyr_GodibunderWaterStation_36.setVisible(true);lyr_GodibunderWaterTank_37.setVisible(true);lyr_PatlipadaStemOffice_38.setVisible(true);lyr_PatlipadaWaterTank_39.setVisible(true);lyr_PumpStation_40.setVisible(true);lyr_PhataFillingStation_41.setVisible(true);lyr_Stem_MBR15ML_42.setVisible(true);lyr_StemMBR_43.setVisible(true);lyr_Road_44.setVisible(true);lyr_UlhasRiver_45.setVisible(true);lyr_CLF_46.setVisible(true);lyr_StemInfrastructure_47.setVisible(true);lyr_TMCWTP_48.setVisible(true);lyr_Waterline_49.setVisible(true);lyr_MBMC_Ward_Boundry_50.setVisible(true);lyr_BNCMCWardBoundry_51.setVisible(true);lyr_STEM_Village_DB_52.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Merge_Toposheet_1,lyr_BNCMC_Final_map_2,lyr_MBMC_Clip_Map_3,lyr_Grid_SHP_4,lyr_MurvaWaterStation_5,lyr_KashmiraWaterStation_6,lyr_KashimiraWaterTank_7,lyr_ChinaWaterStation_8,lyr_ChinaVillageWaterTank_9,lyr_MiraMIDCWaterTank_10,lyr_MiraMIDCWaterStation_11,lyr_MiraGavWaterStation_12,lyr_MiraGavWaterTank_13,lyr_DongriWaterTank_14,lyr_DongriWaterStation_15,lyr_MurvaWaterTank_16,lyr_PanjuWaterStation_17,lyr_PanjuWaterTank_18,lyr_SudamaWaterStation_19,lyr_SudamaWaterTank_20,lyr_GoddevWaterTank_21,lyr_GoddevWaterStation_22,lyr_777WaterTank_23,lyr_777WaterStation_24,lyr_KamlanagarWaterStation_25,lyr_KamlanagarWaterTank_26,lyr_AsmitaWaterStation_27,lyr_AsmitaWaterTank_28,lyr_11NoWaterTank_29,lyr_SilverWaterStation_30,lyr_SilverLineWaterTank_31,lyr_NavgharWaterTank_32,lyr_NavgharWaterStation_33,lyr_KanakiyaWaterTank_34,lyr_KanakiyaWaterStation_35,lyr_GodibunderWaterStation_36,lyr_GodibunderWaterTank_37,lyr_PatlipadaStemOffice_38,lyr_PatlipadaWaterTank_39,lyr_PumpStation_40,lyr_PhataFillingStation_41,lyr_Stem_MBR15ML_42,lyr_StemMBR_43,lyr_Road_44,lyr_UlhasRiver_45,group_WTPTemghar,lyr_Waterline_49,lyr_MBMC_Ward_Boundry_50,lyr_BNCMCWardBoundry_51,lyr_STEM_Village_DB_52];
lyr_Grid_SHP_4.set('fieldAliases', {'id': 'id', });
lyr_MurvaWaterStation_5.set('fieldAliases', {'id': 'id', });
lyr_KashmiraWaterStation_6.set('fieldAliases', {'id': 'id', });
lyr_KashimiraWaterTank_7.set('fieldAliases', {'id': 'id', });
lyr_ChinaWaterStation_8.set('fieldAliases', {'id': 'id', });
lyr_ChinaVillageWaterTank_9.set('fieldAliases', {'id': 'id', });
lyr_MiraMIDCWaterTank_10.set('fieldAliases', {'id': 'id', });
lyr_MiraMIDCWaterStation_11.set('fieldAliases', {'id': 'id', });
lyr_MiraGavWaterStation_12.set('fieldAliases', {'id': 'id', });
lyr_MiraGavWaterTank_13.set('fieldAliases', {'id': 'id', });
lyr_DongriWaterTank_14.set('fieldAliases', {'id': 'id', 'Labels': 'Labels', });
lyr_DongriWaterStation_15.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_MurvaWaterTank_16.set('fieldAliases', {'id': 'id', });
lyr_PanjuWaterStation_17.set('fieldAliases', {'id': 'id', });
lyr_PanjuWaterTank_18.set('fieldAliases', {'id': 'id', });
lyr_SudamaWaterStation_19.set('fieldAliases', {'id': 'id', });
lyr_SudamaWaterTank_20.set('fieldAliases', {'id': 'id', });
lyr_GoddevWaterTank_21.set('fieldAliases', {'id': 'id', });
lyr_GoddevWaterStation_22.set('fieldAliases', {'id': 'id', });
lyr_777WaterTank_23.set('fieldAliases', {'id': 'id', });
lyr_777WaterStation_24.set('fieldAliases', {'id': 'id', });
lyr_KamlanagarWaterStation_25.set('fieldAliases', {'id': 'id', });
lyr_KamlanagarWaterTank_26.set('fieldAliases', {'id': 'id', });
lyr_AsmitaWaterStation_27.set('fieldAliases', {'id': 'id', });
lyr_AsmitaWaterTank_28.set('fieldAliases', {'id': 'id', });
lyr_11NoWaterTank_29.set('fieldAliases', {'id': 'id', });
lyr_SilverWaterStation_30.set('fieldAliases', {'id': 'id', });
lyr_SilverLineWaterTank_31.set('fieldAliases', {'id': 'id', });
lyr_NavgharWaterTank_32.set('fieldAliases', {'id': 'id', });
lyr_NavgharWaterStation_33.set('fieldAliases', {'id': 'id', });
lyr_KanakiyaWaterTank_34.set('fieldAliases', {'id': 'id', });
lyr_KanakiyaWaterStation_35.set('fieldAliases', {'id': 'id', });
lyr_GodibunderWaterStation_36.set('fieldAliases', {'id': 'id', });
lyr_GodibunderWaterTank_37.set('fieldAliases', {'id': 'id', });
lyr_PatlipadaStemOffice_38.set('fieldAliases', {'id': 'id', });
lyr_PatlipadaWaterTank_39.set('fieldAliases', {'id': 'id', });
lyr_PumpStation_40.set('fieldAliases', {'id': 'id', });
lyr_PhataFillingStation_41.set('fieldAliases', {'id': 'id', });
lyr_Stem_MBR15ML_42.set('fieldAliases', {'id': 'id', 'Attribute': 'Attribute', });
lyr_StemMBR_43.set('fieldAliases', {'id': 'id', 'Attribute': 'Attribute', });
lyr_Road_44.set('fieldAliases', {'Id': 'Id', });
lyr_UlhasRiver_45.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Labels': 'Labels', });
lyr_CLF_46.set('fieldAliases', {'id': 'id', });
lyr_StemInfrastructure_47.set('fieldAliases', {'id': 'id', });
lyr_TMCWTP_48.set('fieldAliases', {'id': 'id', });
lyr_Waterline_49.set('fieldAliases', {'id': 'id', 'Pipeline': 'Pipeline', 'Lenghth': 'Lenghth', });
lyr_MBMC_Ward_Boundry_50.set('fieldAliases', {'id': 'id', 'Ward_No': 'Ward_No', });
lyr_BNCMCWardBoundry_51.set('fieldAliases', {'id': 'id', 'Ward_No': 'Ward_No', });
lyr_STEM_Village_DB_52.set('fieldAliases', {'Village Name': 'Village Name', 'Lat': 'Lat', 'Long': 'Long', 'Ref': 'Ref', });
lyr_Grid_SHP_4.set('fieldImages', {'id': 'TextEdit', });
lyr_MurvaWaterStation_5.set('fieldImages', {'id': 'TextEdit', });
lyr_KashmiraWaterStation_6.set('fieldImages', {'id': 'TextEdit', });
lyr_KashimiraWaterTank_7.set('fieldImages', {'id': 'TextEdit', });
lyr_ChinaWaterStation_8.set('fieldImages', {'id': 'TextEdit', });
lyr_ChinaVillageWaterTank_9.set('fieldImages', {'id': 'TextEdit', });
lyr_MiraMIDCWaterTank_10.set('fieldImages', {'id': 'TextEdit', });
lyr_MiraMIDCWaterStation_11.set('fieldImages', {'id': 'TextEdit', });
lyr_MiraGavWaterStation_12.set('fieldImages', {'id': 'TextEdit', });
lyr_MiraGavWaterTank_13.set('fieldImages', {'id': 'TextEdit', });
lyr_DongriWaterTank_14.set('fieldImages', {'id': 'TextEdit', 'Labels': '', });
lyr_DongriWaterStation_15.set('fieldImages', {'id': 'TextEdit', 'Name': '', });
lyr_MurvaWaterTank_16.set('fieldImages', {'id': 'TextEdit', });
lyr_PanjuWaterStation_17.set('fieldImages', {'id': 'TextEdit', });
lyr_PanjuWaterTank_18.set('fieldImages', {'id': 'TextEdit', });
lyr_SudamaWaterStation_19.set('fieldImages', {'id': 'TextEdit', });
lyr_SudamaWaterTank_20.set('fieldImages', {'id': 'TextEdit', });
lyr_GoddevWaterTank_21.set('fieldImages', {'id': 'TextEdit', });
lyr_GoddevWaterStation_22.set('fieldImages', {'id': 'TextEdit', });
lyr_777WaterTank_23.set('fieldImages', {'id': 'TextEdit', });
lyr_777WaterStation_24.set('fieldImages', {'id': 'TextEdit', });
lyr_KamlanagarWaterStation_25.set('fieldImages', {'id': 'TextEdit', });
lyr_KamlanagarWaterTank_26.set('fieldImages', {'id': 'TextEdit', });
lyr_AsmitaWaterStation_27.set('fieldImages', {'id': 'TextEdit', });
lyr_AsmitaWaterTank_28.set('fieldImages', {'id': 'TextEdit', });
lyr_11NoWaterTank_29.set('fieldImages', {'id': 'TextEdit', });
lyr_SilverWaterStation_30.set('fieldImages', {'id': 'TextEdit', });
lyr_SilverLineWaterTank_31.set('fieldImages', {'id': 'TextEdit', });
lyr_NavgharWaterTank_32.set('fieldImages', {'id': 'TextEdit', });
lyr_NavgharWaterStation_33.set('fieldImages', {'id': 'TextEdit', });
lyr_KanakiyaWaterTank_34.set('fieldImages', {'id': 'TextEdit', });
lyr_KanakiyaWaterStation_35.set('fieldImages', {'id': 'TextEdit', });
lyr_GodibunderWaterStation_36.set('fieldImages', {'id': 'TextEdit', });
lyr_GodibunderWaterTank_37.set('fieldImages', {'id': 'TextEdit', });
lyr_PatlipadaStemOffice_38.set('fieldImages', {'id': 'TextEdit', });
lyr_PatlipadaWaterTank_39.set('fieldImages', {'id': 'TextEdit', });
lyr_PumpStation_40.set('fieldImages', {'id': 'TextEdit', });
lyr_PhataFillingStation_41.set('fieldImages', {'id': 'TextEdit', });
lyr_Stem_MBR15ML_42.set('fieldImages', {'id': 'TextEdit', 'Attribute': 'TextEdit', });
lyr_StemMBR_43.set('fieldImages', {'id': 'TextEdit', 'Attribute': 'TextEdit', });
lyr_Road_44.set('fieldImages', {'Id': 'Range', });
lyr_UlhasRiver_45.set('fieldImages', {'id': 'TextEdit', 'Area': '', 'Labels': '', });
lyr_CLF_46.set('fieldImages', {'id': 'TextEdit', });
lyr_StemInfrastructure_47.set('fieldImages', {'id': 'TextEdit', });
lyr_TMCWTP_48.set('fieldImages', {'id': 'TextEdit', });
lyr_Waterline_49.set('fieldImages', {'id': 'TextEdit', 'Pipeline': 'TextEdit', 'Lenghth': '', });
lyr_MBMC_Ward_Boundry_50.set('fieldImages', {'id': 'TextEdit', 'Ward_No': 'TextEdit', });
lyr_BNCMCWardBoundry_51.set('fieldImages', {'id': 'TextEdit', 'Ward_No': '', });
lyr_STEM_Village_DB_52.set('fieldImages', {'Village Name': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Ref': 'TextEdit', });
lyr_Grid_SHP_4.set('fieldLabels', {'id': 'no label', });
lyr_MurvaWaterStation_5.set('fieldLabels', {'id': 'no label', });
lyr_KashmiraWaterStation_6.set('fieldLabels', {'id': 'no label', });
lyr_KashimiraWaterTank_7.set('fieldLabels', {'id': 'no label', });
lyr_ChinaWaterStation_8.set('fieldLabels', {'id': 'no label', });
lyr_ChinaVillageWaterTank_9.set('fieldLabels', {'id': 'no label', });
lyr_MiraMIDCWaterTank_10.set('fieldLabels', {'id': 'no label', });
lyr_MiraMIDCWaterStation_11.set('fieldLabels', {'id': 'no label', });
lyr_MiraGavWaterStation_12.set('fieldLabels', {'id': 'no label', });
lyr_MiraGavWaterTank_13.set('fieldLabels', {'id': 'no label', });
lyr_DongriWaterTank_14.set('fieldLabels', {'id': 'no label', 'Labels': 'no label', });
lyr_DongriWaterStation_15.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_MurvaWaterTank_16.set('fieldLabels', {'id': 'no label', });
lyr_PanjuWaterStation_17.set('fieldLabels', {'id': 'no label', });
lyr_PanjuWaterTank_18.set('fieldLabels', {'id': 'no label', });
lyr_SudamaWaterStation_19.set('fieldLabels', {'id': 'no label', });
lyr_SudamaWaterTank_20.set('fieldLabels', {'id': 'no label', });
lyr_GoddevWaterTank_21.set('fieldLabels', {'id': 'no label', });
lyr_GoddevWaterStation_22.set('fieldLabels', {'id': 'no label', });
lyr_777WaterTank_23.set('fieldLabels', {'id': 'no label', });
lyr_777WaterStation_24.set('fieldLabels', {'id': 'no label', });
lyr_KamlanagarWaterStation_25.set('fieldLabels', {'id': 'no label', });
lyr_KamlanagarWaterTank_26.set('fieldLabels', {'id': 'no label', });
lyr_AsmitaWaterStation_27.set('fieldLabels', {'id': 'no label', });
lyr_AsmitaWaterTank_28.set('fieldLabels', {'id': 'no label', });
lyr_11NoWaterTank_29.set('fieldLabels', {'id': 'no label', });
lyr_SilverWaterStation_30.set('fieldLabels', {'id': 'no label', });
lyr_SilverLineWaterTank_31.set('fieldLabels', {'id': 'no label', });
lyr_NavgharWaterTank_32.set('fieldLabels', {'id': 'no label', });
lyr_NavgharWaterStation_33.set('fieldLabels', {'id': 'no label', });
lyr_KanakiyaWaterTank_34.set('fieldLabels', {'id': 'no label', });
lyr_KanakiyaWaterStation_35.set('fieldLabels', {'id': 'no label', });
lyr_GodibunderWaterStation_36.set('fieldLabels', {'id': 'no label', });
lyr_GodibunderWaterTank_37.set('fieldLabels', {'id': 'no label', });
lyr_PatlipadaStemOffice_38.set('fieldLabels', {'id': 'no label', });
lyr_PatlipadaWaterTank_39.set('fieldLabels', {'id': 'no label', });
lyr_PumpStation_40.set('fieldLabels', {'id': 'no label', });
lyr_PhataFillingStation_41.set('fieldLabels', {'id': 'no label', });
lyr_Stem_MBR15ML_42.set('fieldLabels', {'id': 'header label - always visible', 'Attribute': 'no label', });
lyr_StemMBR_43.set('fieldLabels', {'id': 'no label', 'Attribute': 'no label', });
lyr_Road_44.set('fieldLabels', {'Id': 'no label', });
lyr_UlhasRiver_45.set('fieldLabels', {'id': 'no label', 'Area': 'no label', 'Labels': 'no label', });
lyr_CLF_46.set('fieldLabels', {'id': 'no label', });
lyr_StemInfrastructure_47.set('fieldLabels', {'id': 'no label', });
lyr_TMCWTP_48.set('fieldLabels', {'id': 'no label', });
lyr_Waterline_49.set('fieldLabels', {'id': 'no label', 'Pipeline': 'no label', 'Lenghth': 'no label', });
lyr_MBMC_Ward_Boundry_50.set('fieldLabels', {'id': 'no label', 'Ward_No': 'no label', });
lyr_BNCMCWardBoundry_51.set('fieldLabels', {'id': 'no label', 'Ward_No': 'no label', });
lyr_STEM_Village_DB_52.set('fieldLabels', {'Village Name': 'no label', 'Lat': 'no label', 'Long': 'no label', 'Ref': 'no label', });
lyr_STEM_Village_DB_52.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});