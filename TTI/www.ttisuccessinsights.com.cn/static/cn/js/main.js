//公用方法
var handleEvns = {
  pageLayoutFunc: function () {
    handleEvns.headerActiveFunc()
    handleEvns.footerSubmitFunc()
    // 组件注册
    window.dsAlert = new DS_Library.Alert();
    //实例化Loading组件
    window.dsLoading = new DS_Library.Loading({
      tips: '加载中'
    });
    window.dsConfirm = new DS_Library.Confirm();
    window.dsMask = new DS_Library.Mask();

  },
  //导航滚动方法
  headerActiveFunc: function () {
    var $header = $('.ds-header');
    var $dom = $(document);
    var height = $('.test-banner').height()
    var updateHeaderState = function () {
      var top = $dom.scrollTop();
      if (top > 200) {
        $header.addClass('active');
      } else {
        $header.removeClass('active');
      }
      // 测评详情的滚动显示
      if (top > height - 100) {
        $('.test-tab').addClass('show');
      } else {
        $('.test-tab').removeClass('show');
      }
    }
    updateHeaderState();
    // 导航滚动
    app.addEvent('scroll', 'header', function (e) {
      updateHeaderState();
    }, 'throttle', 50);

  },
  //底部提交表单
  footerSubmitFunc: function () {

    $('.footer-input').on('input', function () {
      var name = $('#your-name').val()
      var phone = $('#your-phone').val()
      var content = $('#your-content').val()
      var company = $('#your-company').val()
      var job = $('#your-job').val()
      if (name != '' || phone != '' || content != '' || company != '' || job != '') {
        $('.submit').addClass('active')
      }
      else {
        $('.submit').removeClass('active')
      }
    });


    // 点击表单提交
    var flag = true
    $('.submit').click(function () {
      var name = $('#your-name').val()
      var phone = $('#your-phone').val()
      var content = $('#your-content').val()
      var company = $('#your-company').val()
      var job = $('#your-job').val()
      if (flag === false) {
        return false
      }
      if (name == '') {
        dsAlert.show('请输入您的姓名')
        return false
      }
      if (phone == '') {
        dsAlert.show('请输入您的手机号码')
        return false
      } else if (!/^1\d{10}$/.test(phone)) {
        dsAlert.show('请输入正确格式的手机号码')
        return false
      }
      if (company == '') {
        dsAlert.show('请输入您的公司名称')
        return false
      }
      if (job == '') {
        dsAlert.show('请输入您的职位名称')
        return false
      }
      if (content == '') {
        dsAlert.show('请输入您想对我们说的话')
        return false
      }
      flag = false
      //走接口
      $.post('/api/activity/addmessage', { name: name, phone: phone, contents: content, company: company, position: job }, function (rsp) {
        if (rsp.errcode === 0) {
          flag = true
          dsAlert.show('提交成功', function () {
            $('#your-name').val('')
            $('#your-phone').val('')
            $('#your-content').val('')
            $('#your-company').val('')
            $('#your-job').val('')
            // window.location.reload()
          })
        }
      })
    })
  }
}

// 页面管理
var PageManage = {
  // 首页
  homeIndex: function () {
    //banner
    var homeSwiper = new Swiper(".home-swiper", {
      autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".home-swiper .swiper-button-next",
        prevEl: ".home-swiper .swiper-button-prev",
      },
      pagination: {
        el: ".home-swiper .swiper-pagination",
      },
    });

    $('.to-brand').click(function () {
      var top = $('.brand').offset().top
      $('html,body').stop().animate({
        scrollTop: top
      }, 1000)
    })

    $('.about-left').hover(function () {
      $('.about-left').addClass('active')
      $('.about-video')[0].play()
    })

    // 判断是否需要添加元素的方法
    var scrollCheck = function (dom) {
      var outerWidth = dom.el.find('.scroll-inner').outerWidth()
      var w_width = $(window).width()
      var length = dom.el.find('.scroll-slide').length //元素个数
      var flag = false
      //第二列向左移动
      if (dom.direction) {
        //判断是否滑动到底部或者个数是否小于9
        if (outerWidth - dom.left <= 300 || length < 12) {
          flag = true
        }
      }
      //判断是否滑动到底部或者个数是否小于9
      if (dom.left >= outerWidth - w_width - 300 || length < 12) {
        flag = true
      }
      return flag
    }

    //添加新合作伙伴
    var addSides = function (dom) {
      var $inner = dom.el.find('.scroll-inner')
      var html = $inner.html()
      if (scrollCheck(dom)) {
        if (dom.direction) {
          $inner.prepend(html)
        }
        else {
          $inner.append(html);
        }
      }
    }

    //认证校友
    var animateSwiper1 =
    {
      left: 0,
      direction: false, // 方向是否为左
      el: $('.scroll-one')
    }

    //合作客户
    var animateSwiper2 =
    {
      left: 0,
      direction: true,
      el: $('.scroll-two')
    }

    //内训与解决方案
    var animateSwiper3 =
    {
      left: 0,
      direction: true,
      el: $('.scroll-solve')
    }

    //计时器
    timer = setInterval(function () {
      autoScroll(animateSwiper1)
      autoScroll(animateSwiper2)
    }, 20)

    //内训与解决方案
    solveTimer = setInterval(function () {
      autoScroll(animateSwiper3)
    }, 20)

    //自动滚动
    var autoScroll = function (dom) {
      dom.left++
      //第二列 方向为左
      if (dom.direction) {
        var outerWidth = dom.el.find('.scroll-inner').outerWidth()
        var w_width = $(window).width()
        dom.el.scrollLeft(outerWidth - w_width - dom.left)
      }
      else {
        dom.el.scrollLeft(dom.left)
      }
      //检查是否需要添加新的元素
      if (scrollCheck(dom)) {
        addSides(dom)
      }
    }

    //鼠标悬停
    $('.scroll-solve-inner').hover(function () {
      clearInterval(solveTimer)
      solveTimer = null
    }, function () {
      solveTimer = setInterval(function () {
        autoScroll(animateSwiper3)
      }, 20)
    })

    var length = $('.brand-img-swiper').length
    var arr = []
    for (var i = 0; i < length; i++) {
      arr[i] = new Swiper(".brand-swiper-" + i, {
        slidesPerView: 'auto',
        spaceBetween: 30,
      });
    }

    var total = $('.history-item').length > 10 ? $('.history-item').length : '0' + $('.history-item').length
    $('.total').html(total)
    var historySwiper = new Swiper(".history-swiper", {
      direction: 'vertical',
      loop: true,
      slidesPerView: 'auto',
      scrollbar: {
        el: '.history-swiper .swiper-scrollbar',
      },
      navigation: {
        nextEl: ".brand .swiper-button-next",
        prevEl: ".brand .swiper-button-prev"
      },
      // pagination: {
      //   el: ".brand .swiper-pagination",
      //   type: "fraction",
      // },
      on: {
        slideChangeTransitionEnd: function () {
          var realIndex = this.realIndex
          arr[realIndex].slideTo(0)
          $('.brand-img-swiper').removeClass('show')
          $('.brand-img-swiper').eq(realIndex).addClass('show')
          var current = realIndex + 1
          current = current > 10 ? current : '0' + current
          $('.current').html(current)
        },
      },
    });

    // 鼠标结果测评分析师认证标题 实现渐变
    $('.item-top').mouseenter(function () {
      $('.analyst-box').addClass('active')
    })
    $('.item-top').mouseleave(function () {
      $('.analyst-box').removeClass('active')
    })

  },
  // 解决方案
  solveIndex: function () {

  },
  // 解决方案
  solveDetail: function () {

  },
  // 活动排期
  activityIndex: function () {
    var page = 1;
    var pageSizes = 4;
    var flag = true

    // 渲染
    var optionRender = function (array) {
      var html = ''
      for (var i = 0; i < array.length; i++) {


        html += '<div class="list-item">' +
          '<div class="list-item-left">' +
          '<div class="list-item-title"> ' + array[i].main_title + '</div>' +
          '<div class="list-item-text">' + array[i].introduction + '</div>' +
          '</div>' +
          '<div class="list-item-right">' +
          '<div class="list-items">' +
          '<div class="list-items-title">时间：</div>' +
          '<div class="list-items-text">' + array[i].activity_time + '</div>' +
          '</div>' +
          '<div class="list-items">' +
          '<div class="list-items-title">地点：</div>' +
          '<div class="list-items-text">' + array[i].location + '</div>' +
          '</div>' +
          '<div class="list-items">' +
          '<div class="list-items-title">价格：</div>' +
          '<div class="list-items-text">' + array[i].course_fees + '</div>' +
          '</div>' +
          '</div>';
        if (array[i].activity_url != "" && array[i].activity_url != null) {
          html += '<a href="' + array[i].activity_url + '" class="list-items-button" target="_blank"   >点击报名 ></a>'
        }
        html += '</div>'
      }
      if (page == 1) {
        $('.list-container').html(html)
      } else {
        $('.list-container').append(html)
      }
    }

    var getCaseList = function (loadingType) {
      if (flag) {
        if (loadingType === 0) {
          dsLoading.show()
        } else {
          $('.case-button').addClass('loading')
        }
        flag = false
        var parameterList = []
        $('.tab-items.active').each(function () {
          parameterList.push($(this).attr('data-id'))
        })
        $.post('/api/activity/getlist', { page: page, pageSize: pageSizes, parameterId: parameterList.join(',') }, function (rsp) {
          if (rsp.errcode === 0) {
            var list = rsp.list
            optionRender(list)

            $('.case-button').removeClass('loading')
            dsLoading.hide()
            flag = true

            page++
            if (rsp.list.length < pageSizes) {
              $('.case-button').hide()
              $('.tips').addClass('show')
            } else {
              $('.case-button').show()
              $('.tips').removeClass('show')
            }
          }
          if (loadingType === 0) {
            dsLoading.hide()
          } else {
            $('.case-button').removeClass('loading')
          }
          flag = true
        })

      }
    }

    getCaseList(0)

    // 点击全部
    $('.tab-all').click(function () {
      if (!$(this).hasClass('active')) { // 当前项全选
        $(this).addClass('active')
        $(this).siblings().addClass('active')
      } else {
        $(this).removeClass('active')
        $(this).siblings().removeClass('active')
      }
      page = 1;
      getCaseList(0)
    })

    // 点击切换分类
    $('.tab-items').click(function () {
      if (!$(this).hasClass('active')) {
        $(this).addClass('active')
      } else {
        $(this).removeClass('active')
      }
      // 点击分类
      var $length = $(this).parent().children('.tab-items').length // 子元素总数
      var $currentLength = $(this).parent().children('.tab-items.active').length // 子元素中被选中的总数
      if ($length == $currentLength) {
        $(this).siblings('.tab-all').addClass('active')
      } else {
        $(this).siblings('.tab-all').removeClass('active')
      }

      page = 1;
      getCaseList(0)
    })

    // 点击加载更多
    $('.case-button').click(function () {
      getCaseList(1)
    })

  },
  // 激励因子
  motivatorIndex: function () {

  },
  // 胜任力
  competencyIndex: function () {

  },
  // 情商
  eqIndex: function () {

  },
  // 思维敏锐力
  keenIndex: function () {

  },
  // 行为风格
  behaviorIndex: function () {

  },
  // 认证
  authenticationIndex: function () {

    $('.banner-btn').click(function () {
      var id = $(this).attr('data-id')
      var top = $('.scrollPosition[data-id=' + id + ']').offset().top
      console.log(top)
      $('html,body').stop().animate({
        scrollTop: top - 100
      }, 1000)
    })

    var accompanySwiper = new Swiper(".accompanySwiper", {
      slidesPerView: 'auto',
      spaceBetween: 30,
      centeredSlides: true,
      initialSlide: 1,
      pagination: {
        el: ".accompanySwiper .swiper-pagination",
        type: "custom",
        renderCustom: function (swiper, current, total) {
          var currentText = current >= 10 ? current : '0' + current
          var totalText = total >= 10 ? total : '0' + total
          var txet = '<span class="swiper-pagination-current">' + currentText + '</span> / <span class="swiper-pagination-total">' + totalText + '</span>'
          return txet
        }
      },
      navigation: {
        nextEl: ".accompanySwiper .swiper-button-next",
        prevEl: ".accompanySwiper .swiper-button-prev",
      },
    });
    accompanySwiper.update()

    // 判断是否需要添加元素的方法
    var scrollCheck = function (dom) {
      var outerWidth = dom.el.find('.scroll-inner').outerWidth()
      var w_width = $(window).width()
      var length = dom.el.find('.scroll-slide').length //元素个数
      var flag = false
      //第二列向左移动
      if (dom.direction) {
        //判断是否滑动到底部或者个数是否小于9
        if (outerWidth - dom.left <= 300 || length < 12) {
          flag = true
        }
      }
      //判断是否滑动到底部或者个数是否小于9
      if (dom.left >= outerWidth - w_width - 300 || length < 12) {
        flag = true
      }
      return flag
    }

    //添加新合作伙伴
    var addSides = function (dom) {
      var $inner = dom.el.find('.scroll-inner')
      var html = $inner.html()
      if (scrollCheck(dom)) {
        if (dom.direction) {
          $inner.prepend(html)
        }
        else {
          $inner.append(html);
        }
      }
    }

    //认证校友
    var animateSwiper1 =
    {
      left: 0,
      direction: false, // 方向是否为左
      el: $('.scroll-one')
    }


    //计时器
    timer = setInterval(function () {
      autoScroll(animateSwiper1)
    }, 20)

    //自动滚动
    var autoScroll = function (dom) {
      dom.left++
      //第二列 方向为左
      if (dom.direction) {
        var outerWidth = dom.el.find('.scroll-inner').outerWidth()
        var w_width = $(window).width()
        dom.el.scrollLeft(outerWidth - w_width - dom.left)
      }
      else {
        dom.el.scrollLeft(dom.left)
      }
      //检查是否需要添加新的元素
      if (scrollCheck(dom)) {
        addSides(dom)
      }
    }

  },
  // 最新动态
  newsIndex: function () {

  },
  // 校友与客户
  alumnusIndex: function () {

    var membersSwiper = new Swiper(".membersSwiper", {
      direction: "vertical",
      spaceBetween: 70,
      pagination: {
        el: ".member-box .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".member-box .swiper-button-next",
        prevEl: ".member-box .swiper-button-prev",
      },
    });

    var customerSwiper = new Swiper(".customerSwiper", {
      direction: "vertical",
      spaceBetween: 50,
      pagination: {
        el: ".customer-box .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".customer-box .swiper-button-next",
        prevEl: ".customer-box .swiper-button-prev",
      },
    });
  },
}



var app = new APP({
  pageManage: PageManage,
  handleEvns: handleEvns,
  before: function () {
    // console.log('运行之前')
    this.handleEvns.pageLayoutFunc.call(this);
  },
  after: function () {
    // console.log('运行之后')
  }
})
