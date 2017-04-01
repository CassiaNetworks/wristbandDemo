var addSrc = require('publicDir/imgs/addback.jpg')

//hubitem外的字符串
module.exports.ul = ` <ul class='config-tip-peripheral config-tip layui-form'></ul>`

//每个hubitem的字符串          
module.exports.liItem = ` <li class="hub-item" data-cid=<%= cid %> >
                           
                            <div class="layui-form-item">
                                <label class="layui-form-label">Name</label>
                                <div class="layui-input-inline">
                                    <input type="text" <%- cid%> name="name"  placeholder="请输入手环名字"  value='<%= cid %>' class="layui-input">
                                </div>
                            </div>
                            <div class="layui-form-item">
                                <label class="layui-form-label">Mac</label>
                                <div class="layui-input-inline">
                                    <input type="text" <%- cid%> name="mac" lay-verify="hubMac" placeholder="CC:1B:E0:E0:1B:04" value='' class="layui-input">
                                </div>
                            </div>
                            <div class="layui-form-item test">
                                <button class="layui-btn layui-btn-small" lay-submit lay-filter="hubs" lay-select=<%= cid %>  data-cid=<%- cid %>><%= test %></button>
                                <div class="layui-input-inline">
                                    <i data-cid=<%= cid %> >OK</i>
                                </div>
                            </div>
                            
                            <div class="layui-form-item delete">
                                <button class="layui-btn layui-btn-small" data-cid=<%- cid %> class="test"><%= deletes %></button>
                            </div>
                            
                        </li> `


module.exports.footer = `<li class="hub-item addhub">
                            <a href="javascript:void(0)"><img src="${addSrc}" alt="add"></a>
                        </li>
                        <li class="layui-form-item last-li">
                            <div class="layui-button">
                                <button class="layui-btn" id="finsh">完成</button>
                                <button type="reset" class="layui-btn layui-btn-primary">重置</button>
                            </div>
                        </li>`