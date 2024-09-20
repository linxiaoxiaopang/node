module.exports = {
    "type": "object",
    "properties": {
        "code": {
            "type": "integer",
            "format": "int32",
            "example": "接口响应状态码, 不为0则为异常",
            "description": "返回的代码"
        },
        "data": {
            "type": "object",
            "properties": {
                "collectionId": {
                    "type": "integer",
                    "format": "int64",
                    "description": "【FK】转换前的产品集id(product_product_prototype_collection表)"
                },
                "createTime": {
                    "type": "string",
                    "description": "创建时间"
                },
                "id": {
                    "type": "integer",
                    "format": "int64",
                    "description": "主键"
                },
                "mainAccountUid": {
                    "type": "integer",
                    "format": "int64",
                    "description": "主账号id"
                },
                "microTemplateLabelList": {
                    "type": "array",
                    "description": "微定制模板元素标签数组",
                    "items": {
                        "type": "object",
                        "properties": {
                            "effectiveTime": {
                                "type": "string",
                                "description": "生效时间"
                            },
                            "elementType": {
                                "type": "integer",
                                "format": "int32",
                                "description": "元素类型(0-图片; 1-文字内容)"
                            },
                            "fontDesignInfo": {
                                "type": "object",
                                "properties": {
                                    "bendingAngle": {
                                        "type": "integer",
                                        "format": "int32",
                                        "description": "文字弯曲角度"
                                    },
                                    "collectionId": {
                                        "type": "integer",
                                        "format": "int64",
                                        "description": "关联产品集id"
                                    },
                                    "fillColor": {
                                        "type": "string",
                                        "description": "字体填充颜色"
                                    },
                                    "fontSize": {
                                        "type": "integer",
                                        "format": "int32",
                                        "description": "字体大小"
                                    },
                                    "fontStyleId": {
                                        "type": "integer",
                                        "format": "int64",
                                        "description": "字体样式（后台维护字体的id）"
                                    },
                                    "fontWeight": {
                                        "type": "integer",
                                        "format": "int32",
                                        "description": "字体粗细（0-normal；1-bold）"
                                    },
                                    "id": {
                                        "type": "integer",
                                        "format": "int64",
                                        "description": "主键"
                                    },
                                    "imagePath": {
                                        "type": "string",
                                        "description": "生成图片路径"
                                    },
                                    "italicType": {
                                        "type": "integer",
                                        "format": "int32",
                                        "description": "斜体类型(0-正常；1-斜体)"
                                    },
                                    "lineHeight": {
                                        "type": "number",
                                        "format": "float",
                                        "description": "行高"
                                    },
                                    "originalHeight": {
                                        "type": "number",
                                        "format": "double",
                                        "description": "原图高度"
                                    },
                                    "originalWidth": {
                                        "type": "number",
                                        "format": "double",
                                        "description": "原图宽度"
                                    },
                                    "shadow": {
                                        "type": "string",
                                        "description": "阴影信息(json)"
                                    },
                                    "strokeColor": {
                                        "type": "string",
                                        "description": "描边颜色"
                                    },
                                    "strokeWidth": {
                                        "type": "integer",
                                        "format": "int32",
                                        "description": "描边宽度(默认1)"
                                    },
                                    "textAlign": {
                                        "type": "integer",
                                        "format": "int32",
                                        "description": "文本对齐方式(0-left；1-center；2-right)"
                                    },
                                    "textContent": {
                                        "type": "string",
                                        "description": "文字内容"
                                    },
                                    "textSpacing": {
                                        "type": "integer",
                                        "format": "int32",
                                        "description": "文字间距"
                                    },
                                    "thumbnailHeight": {
                                        "type": "number",
                                        "format": "double",
                                        "description": "缩略图高度"
                                    },
                                    "thumbnailWidth": {
                                        "type": "number",
                                        "format": "double",
                                        "description": "缩略图宽度"
                                    },
                                    "transparency": {
                                        "type": "number",
                                        "format": "float",
                                        "description": "透明度（0~1）"
                                    }
                                },
                                "title": "FontDesignInfoVO对象(business)",
                                "description": "文字设计信息",
                                "$$ref": "#/definitions/FontDesignInfoVO对象(business)"
                            },
                            "id": {
                                "type": "integer",
                                "format": "int64",
                                "description": "主键"
                            },
                            "image": {
                                "type": "object",
                                "properties": {
                                    "fileSize": {
                                        "type": "number",
                                        "description": "文件大小"
                                    },
                                    "height": {
                                        "type": "integer",
                                        "format": "int32",
                                        "description": "图片的长"
                                    },
                                    "id": {
                                        "type": "integer",
                                        "format": "int64",
                                        "description": "主键"
                                    },
                                    "isPublic": {
                                        "type": "boolean",
                                        "description": "是否公共原图(1-是公共图片； 0- 不是公共图片)"
                                    },
                                    "isTort": {
                                        "type": "integer",
                                        "format": "int32",
                                        "description": "是否侵权 不侵权-0； 侵权-1"
                                    },
                                    "path": {
                                        "type": "string",
                                        "description": "图片路径"
                                    },
                                    "thumbnailPath": {
                                        "type": "string",
                                        "description": "缩略图"
                                    },
                                    "title": {
                                        "type": "string",
                                        "description": "图片名称"
                                    },
                                    "width": {
                                        "type": "integer",
                                        "format": "int32",
                                        "description": "图片的宽"
                                    }
                                },
                                "title": "ImageVO对象(business)",
                                "description": "图片表",
                                "$$ref": "#/definitions/ImageVO对象(business)"
                            },
                            "imageId": {
                                "type": "integer",
                                "format": "int64",
                                "description": "【FK】图片id(原图为file_image表/文字层为product_font_design_info表)"
                            },
                            "isReplaceable": {
                                "type": "integer",
                                "format": "int32",
                                "description": "是否可替换(0-不可替换; 1-可替换)"
                            },
                            "isUsed": {
                                "type": "integer",
                                "format": "int32",
                                "description": "是否使用中(0-过期; 1-使用中)"
                            },
                            "labelCode": {
                                "type": "string",
                                "description": "标签编码(模板下唯一)"
                            },
                            "microTemplateId": {
                                "type": "integer",
                                "format": "int64",
                                "description": "【FK】微定制模板id(product_micro_template表)"
                            },
                            "replaceMethod": {
                                "type": "integer",
                                "format": "int32",
                                "description": "替换方式(0-缩放; 1-等宽; 2-等高)"
                            }
                        },
                        "title": "MicroTemplateLabelVO对象(business)",
                        "description": "微定制模板定制标签【4.3.0.0-微定制】",
                        "$$ref": "#/definitions/MicroTemplateLabelVO对象(business)"
                    }
                },
                "microTemplateReferSizeList": {
                    "type": "array",
                    "description": "微定制模板参考尺码数组",
                    "items": {
                        "type": "object",
                        "properties": {
                            "effectiveTime": {
                                "type": "string",
                                "description": "生效时间"
                            },
                            "id": {
                                "type": "integer",
                                "format": "int64",
                                "description": "主键"
                            },
                            "isUsed": {
                                "type": "integer",
                                "format": "int32",
                                "description": "是否使用中(0-未使用; 1-使用中)"
                            },
                            "microTemplateCustomLayerGroupList": {
                                "type": "array",
                                "description": "模板定制组块数组",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "backGroundAlpha": {
                                            "type": "integer",
                                            "format": "int32",
                                            "description": "背景色域值_a(alpha通道参数)"
                                        },
                                        "backGroundBlue": {
                                            "type": "string",
                                            "description": "背景色域值_b(图片RGB参数)"
                                        },
                                        "backGroundGreen": {
                                            "type": "string",
                                            "description": "背景色域值_g(图片RGB参数)"
                                        },
                                        "backGroundRed": {
                                            "type": "string",
                                            "description": "背景色域值_r(图片RGB参数)"
                                        },
                                        "id": {
                                            "type": "integer",
                                            "format": "int64",
                                            "description": "主键"
                                        },
                                        "microTemplateCustomLayerGroupImageList": {
                                            "type": "array",
                                            "description": "模板定制图片(参数)数组",
                                            "items": {
                                                "type": "object",
                                                "properties": {
                                                    "flipX": {
                                                        "type": "boolean",
                                                        "format": "int32",
                                                        "description": "x轴翻转"
                                                    },
                                                    "flipY": {
                                                        "type": "boolean",
                                                        "format": "int32",
                                                        "description": "y轴翻转"
                                                    },
                                                    "groupHorizontal": {
                                                        "type": "number",
                                                        "format": "double",
                                                        "description": "平铺的横向间距"
                                                    },
                                                    "groupId": {
                                                        "type": "integer",
                                                        "format": "int64",
                                                        "description": "【FK】微定制模板的定制组块id(product_micro_template_custom_layer_group表)"
                                                    },
                                                    "groupType": {
                                                        "type": "integer",
                                                        "format": "int32",
                                                        "description": "平铺类型(0-普通 1-镜像 2-水平错位 3-垂直错位)"
                                                    },
                                                    "groupVertical": {
                                                        "type": "number",
                                                        "format": "double",
                                                        "description": "平铺垂直间距"
                                                    },
                                                    "id": {
                                                        "type": "integer",
                                                        "format": "int64",
                                                        "description": "主键"
                                                    },
                                                    "imageId": {
                                                        "type": "integer",
                                                        "format": "int64",
                                                        "description": "【FK】图片id(原图为file_image表/文字层为product_font_design_info表)"
                                                    },
                                                    "imageType": {
                                                        "type": "integer",
                                                        "format": "int32",
                                                        "description": "关联图片类型(0-普通原图; 1-文字定制图)"
                                                    },
                                                    "labelId": {
                                                        "type": "integer",
                                                        "format": "int64",
                                                        "description": "【FK】定制标签id(product_micro_template_refer_size_label表)"
                                                    },
                                                    "level": {
                                                        "type": "integer",
                                                        "format": "int32",
                                                        "description": "图片所在的层级"
                                                    },
                                                    "offsetX": {
                                                        "type": "number",
                                                        "format": "double",
                                                        "description": "x轴偏移量"
                                                    },
                                                    "offsetY": {
                                                        "type": "number",
                                                        "format": "double",
                                                        "description": "y轴偏移量"
                                                    },
                                                    "rotation": {
                                                        "type": "number",
                                                        "format": "double",
                                                        "description": "旋转角度"
                                                    },
                                                    "scaleX": {
                                                        "type": "number",
                                                        "format": "double",
                                                        "description": "x轴缩放比率"
                                                    },
                                                    "scaleY": {
                                                        "type": "number",
                                                        "format": "double",
                                                        "description": "y轴缩放比率"
                                                    },
                                                    "tileImageOffset": {
                                                        "type": "string",
                                                        "description": "平铺图片位置/偏移量, json格式"
                                                    }
                                                },
                                                "title": "MicroTemplateCustomLayerGroupImageVO对象(business)",
                                                "description": "微定制模板的定制图片设置参数表【4.3.0.0-微定制】",
                                                "$$ref": "#/definitions/MicroTemplateCustomLayerGroupImageVO对象(business)"
                                            }
                                        },
                                        "referSizeGroupId": {
                                            "type": "integer",
                                            "format": "int64",
                                            "description": "【FK】参考尺码组块id(prototype_refer_size_layer_group表)"
                                        },
                                        "referSizeGroupName": {
                                            "type": "string",
                                            "description": "参考尺码组块名称(裁片名称)"
                                        },
                                        "templateReferSizeId": {
                                            "type": "integer",
                                            "format": "int64",
                                            "description": "【FK】模板参考尺码id(product_micro_template_refer_size表)"
                                        }
                                    },
                                    "title": "MicroTemplateCustomLayerGroupVO对象(business)",
                                    "description": "微定制模板的定制组块(信息)表【4.3.0.0-微定制】",
                                    "$$ref": "#/definitions/MicroTemplateCustomLayerGroupVO对象(business)"
                                }
                            },
                            "microTemplateId": {
                                "type": "integer",
                                "format": "int64",
                                "description": "【FK】微定制模板id(product_micro_template表)"
                            },
                            "referSizeId": {
                                "type": "integer",
                                "format": "int64",
                                "description": "【FK】参考尺码id(prototype_refer_size表)"
                            },
                            "referSizeName": {
                                "type": "string",
                                "description": "参考尺码名称"
                            }
                        },
                        "title": "MicroTemplateReferSizeVO对象(business)",
                        "description": "微定制模板参考尺码(模板的子项)【4.3.0.0-微定制】",
                        "$$ref": "#/definitions/MicroTemplateReferSizeVO对象(business)"
                    }
                },
                "productPrototypeCollection": {
                    "type": "object",
                    "properties": {
                        "bottomBoardShowImageList": {
                            "type": "array",
                            "description": "底板效果图数组",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "absolutePath": {
                                        "type": "string",
                                        "description": "底板效果图绝对路径"
                                    },
                                    "bottomBoardId": {
                                        "type": "integer",
                                        "format": "int64",
                                        "description": "关联底板id"
                                    },
                                    "clearPath": {
                                        "type": "string",
                                        "description": "底板效果图(高清)"
                                    },
                                    "id": {
                                        "type": "integer",
                                        "format": "int64",
                                        "description": "主键"
                                    },
                                    "isCombinedProduct": {
                                        "type": "integer",
                                        "format": "int32",
                                        "description": "是否是组合产品 1-组合产品 0-不是组合产品"
                                    },
                                    "path": {
                                        "type": "string",
                                        "description": "底板效果图"
                                    },
                                    "prototypeCollectionId": {
                                        "type": "integer",
                                        "format": "int64",
                                        "description": "定制产品集/组合定制产品集id"
                                    }
                                },
                                "title": "BottomBoardShowImageDTO对象",
                                "description": "定制产品的根据自定义底板生成的效果图表",
                                "$$ref": "#/definitions/BottomBoardShowImageDTO对象"
                            }
                        },
                        "categoryId": {
                            "type": "integer",
                            "format": "int64",
                            "description": "产品分类ID"
                        },
                        "categoryName": {
                            "type": "string",
                            "description": "分类名称"
                        },
                        "chineseName": {
                            "type": "string",
                            "description": "产品集中文名称"
                        },
                        "customProductList": {
                            "type": "array",
                            "description": "定制产品数组",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "collectionId": {
                                        "type": "integer",
                                        "format": "int64",
                                        "description": "产品集id(spec_prim_prod_id)"
                                    },
                                    "customShowImageList": {
                                        "type": "array",
                                        "description": "产品效果图数组",
                                        "items": {
                                            "type": "object",
                                            "properties": {
                                                "clearPath": {
                                                    "type": "string",
                                                    "description": "清晰效果图路径"
                                                },
                                                "createById": {
                                                    "type": "integer",
                                                    "format": "int64",
                                                    "description": "创建者用户id"
                                                },
                                                "createTime": {
                                                    "type": "string",
                                                    "description": "创建时间"
                                                },
                                                "deptId": {
                                                    "type": "integer",
                                                    "format": "int64"
                                                },
                                                "groupItemId": {
                                                    "type": "integer",
                                                    "format": "int64",
                                                    "description": "款式的坐标图(原型网格图)的站标效果图ID(prim_show_id)"
                                                },
                                                "id": {
                                                    "type": "integer",
                                                    "format": "int64",
                                                    "description": "主键"
                                                },
                                                "isCover": {
                                                    "type": "integer",
                                                    "format": "int32",
                                                    "description": "是否封面isCover"
                                                },
                                                "isDeleted": {
                                                    "type": "string",
                                                    "description": "是否逻辑删除"
                                                },
                                                "ownerId": {
                                                    "type": "integer",
                                                    "format": "int64",
                                                    "description": "所有者用户id"
                                                },
                                                "productId": {
                                                    "type": "integer",
                                                    "format": "int64",
                                                    "description": "定制产品ID prod_id"
                                                },
                                                "referSizeId": {
                                                    "type": "integer",
                                                    "format": "int64",
                                                    "description": "参考尺码id"
                                                },
                                                "showImagePath": {
                                                    "type": "string",
                                                    "description": "效果图存储路径path"
                                                },
                                                "updateById": {
                                                    "type": "integer",
                                                    "format": "int64",
                                                    "description": "更新者用户id"
                                                },
                                                "updateTime": {
                                                    "type": "string",
                                                    "description": "更新时间"
                                                }
                                            },
                                            "title": "CustomShowImageVO对象",
                                            "description": "产品效果图",
                                            "$$ref": "#/definitions/CustomShowImageVO对象"
                                        }
                                    },
                                    "customSpecificProductList": {
                                        "type": "array",
                                        "description": "定制产品SKU数组",
                                        "items": {
                                            "type": "object",
                                            "properties": {
                                                "customSku": {
                                                    "type": "string",
                                                    "description": "用户自定义sku custom_sku"
                                                },
                                                "id": {
                                                    "type": "integer",
                                                    "format": "int64",
                                                    "description": "主键"
                                                },
                                                "productId": {
                                                    "type": "integer",
                                                    "format": "int64",
                                                    "description": "产品id prod_id"
                                                },
                                                "sizeId": {
                                                    "type": "integer",
                                                    "format": "int64",
                                                    "description": "常规尺码id size_spec_id"
                                                },
                                                "sizeName": {
                                                    "type": "string",
                                                    "description": "尺码名称"
                                                }
                                            },
                                            "title": "CustomSpecificProductVO对象(business)",
                                            "description": "常规尺码下有sku具体的定制产品（尺码和款式下的sku定制产品）刀版图信息",
                                            "$$ref": "#/definitions/CustomSpecificProductVO对象(business)"
                                        }
                                    },
                                    "id": {
                                        "type": "integer",
                                        "format": "int64",
                                        "description": "主键"
                                    },
                                    "style": {
                                        "type": "object",
                                        "properties": {
                                            "color": {
                                                "type": "object",
                                                "properties": {
                                                    "colorName": {
                                                        "type": "string",
                                                        "description": "颜色名称"
                                                    },
                                                    "colorValue": {
                                                        "type": "string",
                                                        "description": "色域值"
                                                    },
                                                    "englishColorName": {
                                                        "type": "string",
                                                        "description": "颜色名称(英文)"
                                                    },
                                                    "id": {
                                                        "type": "integer",
                                                        "format": "int64",
                                                        "description": "主键"
                                                    }
                                                },
                                                "title": "ColorDTO对象",
                                                "description": "原型色域值表",
                                                "$$ref": "#/definitions/ColorDTO对象"
                                            },
                                            "colorId": {
                                                "type": "integer",
                                                "format": "int64",
                                                "description": "(颜色)色域值id(prim_color_id)"
                                            },
                                            "id": {
                                                "type": "integer",
                                                "format": "int64",
                                                "description": "主键"
                                            },
                                            "name": {
                                                "type": "string",
                                                "description": "款式名称(structure)"
                                            },
                                            "prototypeId": {
                                                "type": "integer",
                                                "format": "int64",
                                                "description": "产品原型id(prim_prod_id)"
                                            },
                                            "status": {
                                                "type": "integer",
                                                "format": "int32",
                                                "description": "款式状态(10-待完善；0-待上架；1-已上架；2-已下架；)"
                                            }
                                        },
                                        "title": "StyleVO对象(business)",
                                        "description": "款式表",
                                        "$$ref": "#/definitions/StyleVO对象(business)"
                                    },
                                    "styleId": {
                                        "type": "integer",
                                        "format": "int64",
                                        "description": "款式id"
                                    }
                                },
                                "title": "CustomProductVO对象(business)",
                                "description": "款式下的定制产品表（款式下的产品）",
                                "$$ref": "#/definitions/CustomProductVO对象(business)"
                            }
                        },
                        "englishName": {
                            "type": "string",
                            "description": "产品集中文名称"
                        },
                        "id": {
                            "type": "integer",
                            "format": "int64",
                            "description": "主键"
                        },
                        "name": {
                            "type": "string",
                            "description": "产品集名称"
                        }
                    },
                    "title": "ProductPrototypeCollectionVO对象(business)",
                    "description": "产品集(和产品原型一对一)",
                    "$$ref": "#/definitions/ProductPrototypeCollectionVO对象(business)"
                },
                "prototypeId": {
                    "type": "integer",
                    "format": "int64",
                    "description": "【FK】转换的原型id(prototype_product_prototype表)(冗余)"
                },
                "templateCode": {
                    "type": "string",
                    "description": "模板编码(模板名称)"
                }
            },
            "title": "MicroTemplateVO对象(business)",
            "description": "单品微定制模板表【4.3.0.0-微定制】",
            "$$ref": "#/definitions/MicroTemplateVO对象(business)"
        },
        "detailMessage": {
            "type": "string",
            "example": "接口响应详细错误信息",
            "description": "返回的详细的报错异常信息"
        },
        "message": {
            "type": "string",
            "example": "接口响应错误信息",
            "description": "返回的错误消息"
        },
        "page": {
            "type": "object",
            "properties": {
                "offset": {
                    "type": "integer",
                    "format": "int64",
                    "description": "偏移最大条数，默认0"
                },
                "pageIndex": {
                    "type": "integer",
                    "format": "int64",
                    "example": "当前页",
                    "description": "当前页，当前页是第几页，默认1"
                },
                "pageSize": {
                    "type": "integer",
                    "format": "int64",
                    "example": "分页大小",
                    "description": "每页显示条数，默认10"
                },
                "total": {
                    "type": "integer",
                    "format": "int64",
                    "example": "总数据条数",
                    "description": "记录总条数，默认0"
                }
            },
            "title": "Pagenation",
            "$$ref": "#/definitions/Pagenation"
        }
    },
    "title": "响应参数(带分页)«MicroTemplateVO对象(business)»",
    "description": "响应参数(带分页)",
    "$$ref": "#/definitions/响应参数(带分页)«MicroTemplateVO对象(business)»"
}
