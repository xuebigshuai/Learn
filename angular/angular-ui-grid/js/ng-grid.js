var app = angular.module("app", ['ui.grid', 'ui.grid.selection', 'ui.grid.resizeColumns', 'ui.grid.autoResize'
    , 'ui.grid.edit', 'ui.grid.exporter', 'ui.grid.pagination']);
app.controller('myController', function ($scope,i18nService) {
    //国际化；
    i18nService.setCurrentLang("zh-cn");
        var members = [
            {name: 'Morni', age: 19, sex: "男"}
            , {name: 'Jack', age: 20, sex: "男"}
            , {name: 'Lasi', age: 18, sex: "女"}
            , {name: 'Lasi', age: 18, sex: "女"}
            , {name: 'Lasi', age: 18, sex: "女"}
            , {name: 'Lasi', age: 18, sex: "女"}
            , {name: 'Lasi', age: 18, sex: "女"}
            , {name: 'Lasi', age: 18, sex: "女"}
            , {name: 'Lasi', age: 18, sex: "女"}
            , {name: 'Lasi', age: 18, sex: "女"}
            , {name: 'Lasi', age: 18, sex: "女"}
            , {name: 'Lasi', age: 18, sex: "女"}
            , {name: 'Lasi', age: 18, sex: "女"}
            , {name: 'Lasi', age: 18, sex: "女"}
            , {name: 'Lasi', age: 18, sex: "女"}
            , {name: 'Lasi', age: 18, sex: "女"}
            , {name: 'Lasi', age: 18, sex: "女"}];
        $scope.gridOptions = {
            data: 'myData',
            enableSorting: true,//是否支持排序（列，默认为true）
            useExternalSorting: false,//是否支持自定义的排序规则(为true的话自带的排序消失)
            enableRowHeaderSelection: true,//每行是否支持选择(为true会出现复选框).
            enableGridMenu: true,//是否显示表格操作菜单
            showGridFooter: true,//时候显示表格的footer
            enableHorizontalScrollbar: 1,//表格的水平滚动条（1为显示，0为不显示）
            enableVerticalScrollbar: 0,//表格的垂直滚动条 (两个都是 1-显示,0-不显示)
            selectionRowHeaderWidth: 30,//每行的复选框的宽度
            enableCellEditOnFocus: false,//default为false双击时才能编辑,true的时候单击即可打开编辑(cellEdit为true的时候,需要引入'ui.grid.cellNav')
            //分页属性
            enablePagination: true, //是否分页,default为true
            enablePaginationControls: true, //使用默认的底部分页
            paginationPageSizes: [10, 15, 20], //每页显示个数选项
            paginationCurrentPage: 1, //当前的页码
            paginationPageSize: 10, //每页显示个数
            //paginationTemplate: "<div></div>", //自定义底部分页代码
            totalItems: 0, // 总数量
            useExternalPagination: true,//是否使用分页按钮
            enableFooterTotalSelected: true, // 是否显示选中的总数,default为true,如果显示,showGridFooter 必须为true
            enableFullRowSelection: true, //是否点击行任意位置后选中,default为false,当为true时,checkbox可以显示但是不可选中
            columnDefs: [{
                field: 'name',
                displayName: '名字',
                width: '100', //宽度设置
                enableColumnMenu: false,// 是否显示列头部菜单按钮
                enableHiding: false,
                suppressRemoveSort: true,
                enableCellEdit: false, // 是否可编辑
                cellEditableCondition: function ($scope) {
                    return false;//是否编辑控制
                },
                visible: true, //是否显示default为true,
                cellTemplate: '<a href="" ng-click="grid.appScope.viewPages(row.entity);">{{row.entity.name==\'Morni\'?"薛煜帅":row.entity.name}}</a>',//重写cell
                cellClass: function (grid, row, col, rowRenderIndex, colRenderIndex) {
                    if (row.entity.name == "Lasi") {
                        return '.ddd'
                    }
                    //自定义样式
                    return 'red'
                },
                //cell下拉
                editableCellTemplate: 'ui-grid/dropdownEditor',
                editDropdownOptionsArray: [],//[{name:1,nameText:'Yoko'}]
                editDropdownIdLabel: 'name',//id
                editDropdownValueLabel: 'nameText',//显示的名字

                cellFilter: "nameFilet"//过滤器
            }, {
                field: 'age',
                displayName: '年龄',
            }
            , {
                    field: 'sex',
                    displayName: '性别',
                }


            ],
            //------------api-------
            onRegisterApi: function(gridApi) {
                $scope.gridApi = gridApi;
                //分页按钮事件
                gridApi.pagination.on.paginationChanged($scope,function(newPage, pageSize) {
                    if(getPage) {
                        getPage(newPage, pageSize);
                    }
                });
                //行选中事件
                $scope.gridApi.selection.on.rowSelectionChanged($scope,function(row,event){
                    if(row){
                        $scope.testRow = row.entity;
                    }
                });
            }

        };
        var getPage = function(curPage, pageSize) {
            var firstRow = (curPage - 1) * pageSize;
            $scope.gridOptions.totalItems = members.length;
            $scope.gridOptions.data = members.slice(firstRow, firstRow + pageSize);
            //或者像下面这种写法
            //$scope.myData = members.slice(firstRow, firstRow + pageSize);
        };
      getPage(1, $scope.gridOptions.paginationPageSize);

    }

);