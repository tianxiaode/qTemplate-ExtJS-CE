var I18N = {

    ApplicationUpdate: '应用程序更新',
    ApplicationUpdateMsg: '应用程序已经更新，重新加载？',
    None: '无',
    All: '全部',
    Dashboard: '仪表面板',

    DaterangeText: '开始日期必须小于结束日期',
    PasswordText: '密码不符合要求',
    CompareText: '两次输入的结果不同',
    PasswordVTypeText: '密码必须由字母和数字组成',

    FailedTitle: '错误信息',
    Failed404: '错误的请求地址',
    Failed500: '服务器内部错误',
    FailedOtherCode: '错误代码：{0}<br\>响应：{1}',

    AppTitle: '应用程序标题',
    Company: '公司名称',
    CompanyFullName:'公司全称',
    DefaultMessageTitle: '信息',
    GetUserInfo: '加载用户信息......',
    StateRestoreWait: '恢复状态信息...',
    EmptyText: '没有任何数据',

    ComingSoon: '即将推出！',
    StayTunedForUpdates: '敬请期待。',
    Error404HTML: '<div>页面不存在</div><div>尝试返回<a href="/">首页</a></div>',
    Error500HTML: '<div>服务器内部错误</div><div>尝试返回<a href="/">首页</a></div>',
    FormInvalid:'表单数据存在错误, 请更正错误。',

    DefaultDatetimeFormat: 'Y-m-d H:i:s',
    DefaultDateFormat: 'Y-m-d',
    DefaultDatetimeIsoFormat: 'C',
    
    Logout: '退出',
    LoginTitle: '登录',
    LoginLabel: '使用帐号登录',
    LoginSubmitWaitMsg: '正在登录，请等待......',
    LoginSubmitWaitTitle: '正在登录',
    PasswordResetTitle: '修改密码',
    PasswordResetLabel: '输入以下字段以修改密码',
    PasswordResetSuccess: '密码已修改，请重新登录',
    OldPasswordEqualNew: '新密码不能与旧密码相同',
    UserId: '用户名',
    Password: '密码',
    NewPassword: '新密码',
    PasswordRegexText: '密码必须由字母和数字组成,且长度至少为6位',
    ConfirmPassword: '确认密码',
    RememberMe: '记住我',
    ForgotPassword: '忘记密码',

    Save: '保存',
    SaveWaitMsg: '正在保存，请等待......',
    SavedAndClose: '数据已成功保存，窗口将关闭',
    SavedAndNothing: '数据已成功保存',
    SavedAndNew: '数据已成功保存，可继续添加新的数据',
    Reset: '重置',
    Return: '返回',
    Required: '该输入项为必输项',
    RequiredTips: '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>号为必填',
    RequiredTpl: [
        '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
    ],
    PasswordNoEqual: '两次输入的密码不同',
    Count: '共{count}条',

    DeleteNoSelection: '请选择要删除的{0}',
    DeleteWaitMsg: '正在删除，请等待……',
    DeleteConfirmMessageTitle: '删除',
    DeleteConfirmMessage: '<p>确定要删除以下{0}？</p>{1}',

    Add: '新建',
    Edit: '编辑',
    Delete: '删除',
    Details: '详细信息',
    ShowDetails: '查看详细信息',
    Refresh: '刷新',
    Search: '查询',
    Cancel: '取消',
    Selected: '确定',
    SelectedTitleImage: '选择题图',
    SelectedMedia: '选择媒体',
    InsertMedia: '从媒体库插入媒体',
    NoModel: '没有定义模型',
    NoSelection: '请选择{0}，再{1}',
    Loading: '正在加载数据，请等待......',
    Loaded: '已加载',
    SaveAndNewButtonText: '保存和新建',
    SaveButtonText: '保存',
    PasswordNoChange: '注意：如果不修改密码，可留空',
    Sorter: '排序',
    SorterASC: '正序',
    SorterDESC: '倒序',
    EmptyValue: '无',
    HasChild: '节点下还有子节点，不允许删除',
    NoDrop: '拖放操作失败，当前节点不是有效的类别',
    Help: '帮助',
    PhoneRegex: '只允许输入数字、横线(-)和空格',
    Keyword: '关键字',
    Update: '更新',
    Updating: '正在更新...',
    Updated: '信息已更新！',

    SearchDate: '日期：',
    SearchText: '文本：',
    SearchStart: '开始/取消搜索',
    NoSearchValue: '请输入正确的搜索值再进行搜索',
    SearchCompareErrorMessage: '开始{0}不能大于或等于结束{0}',
    Compare: '比较',
    FileUploadError: '文件“{0}”不能上传，错误：{1}',
    FileUploaded: '文件{0}已上传',

    User: '用户',
    Role: '角色',

    Model: 
    {
        User: {
            userName: '用户名',
            name: '姓名',
            roles: '角色',
            displayRoleName: '角色',
            creationTime: '创建日期',
            lastLoginTime: '最后登录时间',
            allowSearchAll: '查询全部',
            isLockout: '已锁定',
            isActive: '已激活',
            password: '密码',
            confirmPassword: '确认密码'
        }
    },
    ValueList: {
        deleteMessage: ['## <i style="color:red">{0}</i> 已删除', '## <i style="color:#ffc037">{0}</i> 未能删除']
    },


    init: function (profile) {
        document.title = I18N.AppTitle;
        var minor = Ext.getVersion().minor;
        if(minor > 2)
            this.initPhone();
        else
            this.initDesktop();

    } ,//init

    initDesktop:function(){
        var parseCodes;

        if (Ext.Date) {
            Ext.Date.monthNames = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];

            Ext.Date.dayNames = ["日", "一", "二", "三", "四", "五", "六"];

            Ext.Date.formatCodes.a = "(this.getHours() < 12 ? '上午' : '下午')";
            Ext.Date.formatCodes.A = "(this.getHours() < 12 ? '上午' : '下午')";

            parseCodes = {
                g: 1,
                c: "if (/(上午)/i.test(results[{0}])) {\n" +
                    "if (!h || h == 12) { h = 0; }\n" +
                    "} else { if (!h || h < 12) { h = (h || 0) + 12; }}",
                s: "(上午|下午)",
                calcAtEnd: true
            };

            Ext.Date.parseCodes.a = Ext.Date.parseCodes.A = parseCodes;
        }

        if (Ext.util && Ext.util.Format) {
            Ext.apply(Ext.util.Format, {
                thousandSeparator: ',',
                decimalSeparator: '.',
                currencySign: '\u00a5',
                // Chinese Yuan
                dateFormat: 'y年m月d日'
            });
        }

        if (Ext.form.field.ComboBox) {
            Ext.apply(Ext.form.field.ComboBox.prototype.defaultListConfig, {
                loadingText: "读取中..."
            });
        }


        if (Ext.form.field.HtmlEditor) {
            Ext.apply(Ext.form.field.HtmlEditor.prototype, {
                buttonTips: {
                    bold: {
                        title: '粗体 (Ctrl+B)',
                        text: '将选中的文字设置为粗体',
                        cls: Ext.baseCSSPrefix + 'html-editor-tip'
                    },
                    italic: {
                        title: '斜体 (Ctrl+I)',
                        text: '将选中的文字设置为斜体',
                        cls: Ext.baseCSSPrefix + 'html-editor-tip'
                    },
                    underline: {
                        title: '下划线 (Ctrl+U)',
                        text: '给所选文字加下划线',
                        cls: Ext.baseCSSPrefix + 'html-editor-tip'
                    },
                    increasefontsize: {
                        title: '增大字体',
                        text: '增大字号',
                        cls: Ext.baseCSSPrefix + 'html-editor-tip'
                    },
                    decreasefontsize: {
                        title: '缩小字体',
                        text: '减小字号',
                        cls: Ext.baseCSSPrefix + 'html-editor-tip'
                    },
                    backcolor: {
                        title: '以不同颜色突出显示文本',
                        text: '使文字看上去像是用荧光笔做了标记一样',
                        cls: Ext.baseCSSPrefix + 'html-editor-tip'
                    },
                    forecolor: {
                        title: '字体颜色',
                        text: '更改字体颜色',
                        cls: Ext.baseCSSPrefix + 'html-editor-tip'
                    },
                    justifyleft: {
                        title: '左对齐',
                        text: '将文字左对齐',
                        cls: Ext.baseCSSPrefix + 'html-editor-tip'
                    },
                    justifycenter: {
                        title: '居中',
                        text: '将文字居中对齐',
                        cls: Ext.baseCSSPrefix + 'html-editor-tip'
                    },
                    justifyright: {
                        title: '右对齐',
                        text: '将文字右对齐',
                        cls: Ext.baseCSSPrefix + 'html-editor-tip'
                    },
                    insertunorderedlist: {
                        title: '项目符号',
                        text: '开始创建项目符号列表',
                        cls: Ext.baseCSSPrefix + 'html-editor-tip'
                    },
                    insertorderedlist: {
                        title: '编号',
                        text: '开始创建编号列表',
                        cls: Ext.baseCSSPrefix + 'html-editor-tip'
                    },
                    createlink: {
                        title: '转成超级链接',
                        text: '将所选文本转换成超级链接',
                        cls: Ext.baseCSSPrefix + 'html-editor-tip'
                    },
                    sourceedit: {
                        title: '代码视图',
                        text: '以代码的形式展现文本',
                        cls: Ext.baseCSSPrefix + 'html-editor-tip'
                    }
                }
            });
        };

        this.doOverrides(I18N.desktopOverrides);
    },

    initPhone: function(){
        if (Ext.Date) {
            Ext.Date.monthNames = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];

            Ext.Date.dayNames = ["日", "一", "二", "三", "四", "五", "六"];
            
            Ext.Date.defaultFormat = I18N.DefaultDateFormat;
            Ext.Date.defaultTimeFormat = 'H:i:ss';
    
            Ext.Date.getShortMonthName = function(month) {
                return Ext.Date.monthNames[month].substring(0, 3);
            };
    
            Ext.Date.monthNumbers = {
                Jan: 0,
                Feb: 1,
                "M\u00e4r": 2,
                Apr: 3,
                Mai: 4,
                Jun: 5,
                Jul: 6,
                Aug: 7,
                Sep: 8,
                Okt: 9,
                Nov: 10,
                Dez: 11
            };
    
            Ext.Date.getMonthNumber = function(name) {
                return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
            };
   
    
            Ext.Date.getShortDayName = function(day) {
                return Ext.Date.dayNames[day].substring(0, 3);
            };
        }
    
        if (Ext.util && Ext.util.Format) {
            Ext.util.Format.__number = Ext.util.Format.number;
            Ext.util.Format.number = function(v, format) {
                return Ext.util.Format.__number(v, format || "0.000,00/i");
            };
    
            Ext.apply(Ext.util.Format, {
                thousandSeparator: '.',
                decimalSeparator: ',',
                currencySign: '\u20ac',
                // German Euro
                dateFormat: 'd.m.Y'
            });
        }
        
        console.log(I18N.phoneOverrides)
        this.doOverrides(I18N.phoneOverrides);
    },

    doOverrides: function(overrides){
        Ext.Object.each(overrides, function(key, value, myself) {
            var cls = Ext.ClassManager.get(key);
            if(cls){
                if(key == "Ext.form.field.VTypes"){
                    value.daterangeText= I18N.DaterangeText;                   
                    value.compareText =  I18N.CompareText;
                    value.passwordText= I18N.PasswordText;
                }
                Ext.override(cls,value);
            }
        });
    },

    desktopOverrides:{
        "Ext.data.validator.Bound":{
            emptyMessage: "必须存在"
        },
        "Ext.data.validator.Email":{
            message: "不是有效的电子邮件地址"
        },
        "Ext.data.validator.Exclusion":{
            message: "值不符合要求"
        },
        "Ext.data.validator.Format":{
            message: "格式错误"
        },
        "Ext.data.validator.Inclusion":{
            message: "值不符合要求"
        },
        "Ext.data.validator.Length":{
            minOnlyMessage: "长度最小是 {0}",
            maxOnlyMessage: "长度必须大于 {0}",
            bothMessage: "长度必须在 {0} 与 {1}直接"    
        },
        "Ext.data.validator.Presence":{
            message: "必须有值"
        },
        "Ext.data.validator.Range":{
            minOnlyMessage: "值必须小于 {0}",
            maxOnlyMessage: "值必须大于 {0}",
            bothMessage: "必须在 {0} 与 {1} 之间",
            nanMessage: "必须是数组"    
        },
        "Ext.grid.plugin.DragDrop":{
            dragText: "{0} 选择了 {1} 行"
        },
        "Ext.view.AbstractView":{
            loadingText: "读取中..."
        },
        "Ext.picker.Date":{
            todayText: "今天",
            minText: "日期必须大于最小允许日期",
            //update
            maxText: "日期必须小于最大允许日期",
            //update
            disabledDaysText: "",
            disabledDatesText: "",
            nextText: '下个月 (Ctrl+Right)',
            prevText: '上个月 (Ctrl+Left)',
            monthYearText: '选择一个月 (Control+Up/Down 来改变年份)',
            //update
            todayTip: "{0} (空格键选择)",
            format: "y年m月d日",
            ariaTitle: '{0}',
            ariaTitleDateFormat: 'Y\u5e74m\u6708d\u65e5',
            longDayFormat: 'Y\u5e74m\u6708d\u65e5',
            monthYearFormat: 'Y\u5e74m\u6708'
        },
        "Ext.picker.Month":{
            okText: "确定",
            cancelText: "取消"    
        },
        "Ext.PagingToolbar":{
            beforePageText: "第",
            //update
            afterPageText: "页,共 {0} 页",
            //update
            firstText: "第一页",
            prevText: "上一页",
            //update
            nextText: "下一页",
            lastText: "最后页",
            refreshText: "刷新",
            displayMsg: "显示 {0} - {1}条，共 {2} 条",
            //update
            emptyMsg: '没有数据'    
        },
        "Ext.form.Basic":{
            waitTitle: "请等待..."
        },
        "Ext.form.field.Base":{
            invalidText: "输入值非法"
        },
        "Ext.form.field.Text":{
            minLengthText: "该输入项的最小长度是 {0} 个字符",
            maxLengthText: "该输入项的最大长度是 {0} 个字符",
            blankText: "该输入项为必输项",
            regexText: "",
            emptyText: null            
        },
        "Ext.form.field.Number":{
            minText: "该输入项的最小值是 {0}",
            maxText: "该输入项的最大值是 {0}",
            nanText: "{0} 不是有效数值"           
        },
        "Ext.form.field.Date":{
            disabledDaysText: "禁用",
            disabledDatesText: "禁用",
            minText: "该输入项的日期必须在 {0} 之后",
            maxText: "该输入项的日期必须在 {0} 之前",
            invalidText: "{0} 是无效的日期 - 必须符合格式： {1}",
            format: "y年m月d日" ,
            formatText: '预期的日期格式是: {0}'           
        },
        "Ext.form.field.VTypes":{
            emailText: '该输入项必须是电子邮件地址，格式如： "user@example.com"',
            urlText: '该输入项必须是URL地址，格式如： "http:/' + '/www.example.com"',
            alphaText: '该输入项只能包含半角字母和_',
            alphanumText: '该输入项只能包含半角字母,数字和_',
            daterange: function (val, field) {
                var date = field.parseDate(val);
        
                if (!date) {
                    return false;
                }
                if (field.startDateField && (!this.dateRangeMax || (date.getTime() != this.dateRangeMax.getTime()))) {
                    var start = field.up(field.parentXtype).down('#' + field.startDateField);
                    start.setMaxValue(date);
                    start.validate();
                    this.dateRangeMax = date;
                }
                else if (field.endDateField && (!this.dateRangeMin || (date.getTime() != this.dateRangeMin.getTime()))) {
                    var end = field.up(field.parentXtype).down('#' + field.endDateField);
                    end.setMinValue(date);
                    end.validate();
                    this.dateRangeMin = date;
                }
                return true;
            },
        
            compare: function (val, field) {
                if (field.initialField) {
                    var pwd = field.up('form').down('#' + field.initialField);
                    return (val == pwd.getValue());
                }else{
                    Ext.raise('No define initialField');
                }
                return true;
            },
        
        
            password: function(val, field){
                var isEmpty = Ext.isEmpty(val);
                if(isEmpty) return true;
                if(field.requireNonLetterOrDigit && !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(val)) return false;
                if(field.requireDigit && ! /[\d]+/.test(val)) return false;
                if(field.requireLowercase && ! /[a-z]+/.test(val)) return false;
                if(field.requireUppercase && ! /[A-Z]+/.test(val)) return false;
                return true;
            }        
        },
        "Ext.form.field.HtmlEditor":{
            createLinkText: '添加超级链接:'
        },
        "Ext.grid.header.Container":{
            sortAscText: "正序",
            sortDescText: "倒序",
            columnsText: "列"    
        },
        "Ext.grid.feature.Grouping":{
            emptyGroupText: '(空)',
            groupByText: '按此字段分组',
            showGroupsText: '以组显示'    
        },
        "Ext.grid.PropertyColumnModel":{
            nameText: "名称",
            valueText: "值",
            dateFormat: "y年m月d日",
            trueText: "true",
            falseText: "false"
        },
        "Ext.grid.BooleanColumn":{
            trueText: "true",
            falseText: "false",
            undefinedText: '&#160;'    
         },
         "Ext.form.field.Time":{
            minText: "时间必须在 {0} 或之后",
            maxText: "时间必须在 {0} 或之前",
            invalidText: "{0} 不是有效的时间",
            format: "g:i A",
            altFormats: "g:ia|g:iA|g:i a|g:i A|h:i|g:i|H:i|ga|ha|gA|h a|g a|g A|gi|hi|gia|hia|g|H"    
         },
         "Ext.form.field.File":{
            buttonText: "浏览..."
         },
         "Ext.form.CheckboxGroup":{
            blankText: "必须选择至少一项"
         },
         "Ext.form.RadioGroup":{
            blankText: "必须选择一项"
         },
         "Ext.window.Window":{
            closeToolText: "关闭窗口"
         },
         "Ext.window.MessageBox":{
            buttonText: {
                ok: "确定",
                cancel: "取消",
                yes: "是",
                no: "否"
            }        
        },
        "Ext.grid.filters.Filters":{
            menuFilterText: "筛选"
        },
        "Ext.grid.filters.filter.Boolean":{
            yesText: "是",
            noText: "否"    
        },
        "Ext.grid.filters.filter.Date":{
            fields: {
                lt: {text: '之前'},
                gt: {text: '之后'},
                eq: {text: '在'}
            },
        },
        "Ext.grid.filters.filter.List":{
            loadingText: "读取中..."
        },
        "Ext.grid.filters.filter.Number":{
            emptyText: "输入数字..."
        },
        "Ext.grid.filters.filter.String":{
            emptyText: "输入关键字..."
        },
        'Ext.view.MultiSelectorSearch':{
            searchText: '搜索...'
        },
        '(Ext.view.MultiSelector':{
            emptyText: '没有选择任何条目',
            removeRowTip: '移除条目',
            addToolText: '搜索要添加的条目'
        },
        "(Ext.tab.Tab":{
            closeText: "关闭此标签"
        }    
    },

    phoneOverrides:{
        "Ext.Panel":{
            config:{
                standardButtons: {
                    ok: {
                        text: '确定'
                    },
                    abort: {
                        text: '取消'
                    },
                    retry: {
                        text: '再试一次'
                    },
                    ignore: {
                        text: '忽略'
                    },
                    yes: {
                        text: '是'
                    },
                    no: {
                        text: '否'
                    },
                    cancel: {
                        text: '取消'
                    },
                    apply: {
                        text: '应用'
                    },
                    save: {
                        text: '保存'
                    },
                    submit: {
                        text: '提交'
                    },
                    help: {
                        text: '帮助'
                    },
                    close: {
                        text: '关闭'
                    }
                },
                closeToolText: '关闭面板'    
            }
        },
        "Ext.picker.Date":{
            config: {
                doneButton: '完成',
                monthText: '月',
                dayText: '日',
                yearText: '年'
            }        
        },
        "Ext.picker.Picker":{
            config: {
                doneButton: '确定',
                cancelButton: '取消'
            }        
        },
        "Ext.panel.Date":{
            config: {
                nextText: '下个月)',
                prevText: '上个月)',
                buttons: {
                    footerTodayButton: {
                        text: "今天"
                    }
                }
            }        
        },
        "Ext.panel.Collapser":{
            config:{
                collapseToolText: "隐藏面板",
                expandToolText: "展开面板"
            }        
        },
        "Ext.field.Field":{
            config: {
                requiredMessage: '该输入项为必输项',
                validationMessage: '格式错误'
            }        
        },
        "Ext.field.Number":{
            decimalsText: '最大小数点位置为 {0}',
            minValueText: '该输入项的最小值是 {0}',
            maxValueText: '该输入项的最大值是 {0}',
            badFormatMessage: '{0} 不是有效数值'        
        },
        "Ext.field.Text":{
            badFormatMessage: '该值与所需格式不匹配',
            config: {
                requiredMessage: '该输入项为必输项',
                validationMessage: '格式错误'
            }        
        },
        "Ext.Dialog":{
            config: {
                maximizeTool: {
                    tooltip: "最大化"
                },
                restoreTool: {
                    tooltip: "还原为原始大小"
                }
            }        
        },
        "Ext.field.FileButton":{
            config:{
                text: '浏览...'
            }        
        },
        "Ext.dataview.List":{
            config:{
                loadingText: '读取中 ...'
            }        
        },
        "Ext.dataview.EmptyText":{
            config: {
                html: '没有要显示的数据'
            }        
        },
        "Ext.dataview.Abstract":{
            config:{
                loadingText: '读取中 ...'
            }        
        },
        "Ext.LoadMask":{
            config:{
                message: '读取中 ...'
            }         
        },
        "Ext.dataview.plugin.ListPaging":{
            config: {
                loadMoreText: '更多...',
                noMoreRecordsText: '没有更多数据了'
            }        
        },
        "Ext.dataview.DataView":{
            config:{
                emptyText: ""
            }        
        },
        "Ext.field.Date":{
            minDateMessage: '该输入项的日期必须在 {0} 之后',
            maxDateMessage: '该输入项的日期必须在 {0} 之前'        
        },
        "Ext.grid.menu.SortAsc":{
            config:{
                text: "升序排序"
            }        
        },
        "Ext.grid.menu.SortDesc":{
            config:{
                text: "降序排序"
            }        
        },
        "Ext.grid.menu.GroupByThis":{
            config:{
                text: "按此字段分组"
            }        
        },
        "Ext.grid.menu.ShowInGroups":{
            config:{
                text: "以组显示"
            }        
        },
        "Ext.grid.menu.Columns":{
            config:{
                text: "列"
            }        
        },
        "Ext.data.validator.Presence":{
            config:{
                message: '必须存在'
            }        
        },
        "Ext.data.validator.Format":{
            config:{
                message: '格式错误'
            }        
        },
        "Ext.data.validator.Email":{
            config:{
                message: '不是有效的电子邮件地址'
            }        
        },
        "Ext.data.validator.Phone":{
            config:{
                message: '不是有效电话号码'
            }        
        },
        "Ext.data.validator.Number":{
            config:{
                message: '不是数字'
            }        
        },
        "Ext.data.validator.Url":{
            config:{
                message: '不是有效的 URL'
            }        
        },
        "Ext.data.validator.Range":{
            config: {
                nanMessage: '不是有效数字',
                minOnlyMessage: '此字段的最小值为 {0}',
                maxOnlyMessage: '此字段的最大值为 {0}',
                bothMessage: '必须介于 {0} 和 {1} 之间'
            }        
        },
        "Ext.data.validator.Bound":{
            config: {
                emptyMessage: '必须存在',
                minOnlyMessage: '值必须大于 {0}',
                maxOnlyMessage: '值必须小于 {0}',
                bothMessage: '值必须介于 {0} 和 {1} 之间'
            }        
        },
        "Ext.data.validator.CIDRv4":{
            config: {
                message: '不是有效的 CIDR 块'
            }        
        },
        "Ext.data.validator.CIDRv6":{
            config: {
                message: '不是有效的 CIDR 块'
            }        
        },
        "Ext.data.validator.Currency":{
            config: {
                message: '不是有效的货币金额'
            }        
        },
        "Ext.data.validator.DateTime":{
            config: {
                message: '不是有效的日期和时间'
            }        
        },
        "Ext.data.validator.Exclusion":{
            config: {
                message: '是已排除的值'
            }        
        },
        "Ext.data.validator.IPAddress":{
            config: {
                message: '不是有效的 IP 地址'
            }        
        },
        "Ext.data.validator.Inclusion":{
            config: {
                message: '不包含在 "允许的值" 列表中'
            }        
        },
        "Ext.data.validator.Time":{
            config: {
                message: '不是有效时间'
            }        
        },
        "Ext.data.validator.Date":{
            config: {
                message: "不是有效日期"
            }        
        },
        "Ext.data.validator.Length":{
            config:{
                minOnlyMessage: '长度必须至少为 {0}',
                maxOnlyMessage: '长度不能超过 {0}',
                bothMessage: '长度必须介于 {0} 和 {1} 之间'
            }        
        }
    }
}