const path = require('path');

module.exports = {
    // 默认开始读取数据行数
    defaultStartRow: 3,

    // 默认输出excel模板文件夹名字
    defaultOutTemplateName: 'xlsx_template',

    // 默认josn数据输出目录
    defaluOutPath: path.resolve('./', './xlsx_json/'),

    // 默认输出的json名字前缀
    defaultPrefixJsonName: 'data',

    // 默认读取的表格
    defaultRange: 'all',

    // 分隔符
    delimiter: '|',
}