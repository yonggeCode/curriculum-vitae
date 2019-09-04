var BSInfoTags = [$(myBSInfo),$(myIntroduce),$(myCaller)] 
var BSInfoTagsBtn = [$(myBSInfoBtn),$(myIntroduceBtn),$(myCallerBtn)];
var AnchorArr = [$(_basicInfo),$(_experience),$(_technology),$(_askMyself),$(_basicInfoBtn)];
var flag = false;
function init() {
    bindEvent();
    //开启轮播图
    $(function () {
        $('#wrap').slider({ curDisplay: 0, autoPlay: true, interval: 2000 });
    });
    
}
function bindEvent(){
    //导航栏按钮显示
    $(navBtn).on('click',function(e){
        e.stopPropagation();
        $(this).addClass('hidden');
        $(btnBavbar).removeClass('hidden')
    })
    $(body).on('click',function(){
        $(btnBavbar).addClass('hidden');
        $(navBtn).removeClass('hidden')
    })
    //按钮滚动
    AnchorArr.forEach(function(ele){
        bindMoveAnchor(ele)
    })
    //资料栏切换
    BSInfoTagsBtn.forEach(function(ele){
        ele.on('click',function(){
            bindBSInfoTagChange('#' + $(this).data('id'))        
        })
    })
    
}
function bindBSInfoTagChange(tagId){
    BSInfoTags.forEach(function (ele) {
        ele.addClass('hidden')
    })
    $(tagId).removeClass('hidden')
}
function bindMoveAnchor(dom) {
    dom.click(function(){
        $("html, body").animate({
            scrollTop: $($(dom).attr("href")).offset().top + "px"
        }, 500); 
    })
    
}
init();

