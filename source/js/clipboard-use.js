/*页面载入完成后，创建复制按钮*/
!function (e, t, a) { 
  var initCopyCode = function(){
    var copyHtml = '';
    copyHtml += '<div class="btn-copy" data-clipboard-snippet="">';
    //fa fa-globe可以去字体库替换自己想要的图标
    copyHtml += '  <div class="btn-icon"></div>';
    copyHtml += '</div>';
    $("pre").addClass("highlight");
    $("code").before(copyHtml);
    var clipboard = new ClipboardJS('.btn-copy', {
        target: function(trigger) {
            return trigger.nextElementSibling;
        }
    });
    // 成功提示
    clipboard.on('success', function(e) {
        swal("复制成功！", "快去你的编辑器里粘贴吧！", "success");
    });

    clipboard.on('error', function(e){
        swal("复制失败！", "你可能得自己手动复制了", "error");
    });
  }
  initCopyCode();
}(window, document);