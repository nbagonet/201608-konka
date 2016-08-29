<template lang="jade">
  #qagame(transition='fade')

    //- 首页
    .qa-index(v-show='progress === -1 && chanceNum' transition='fade')
      .bg
      .btns
        a.btn-start(@click='setProgress(0)') 开始答题
        a.btn-rules(@click='openRules(true)') 规则说明
        a.btn-back(@click='back3D') 返回

    //- 规则
    .qa-rules(v-show='rulesOpen' transition='fade' @click='openRules(false)')
      .popup

    //- 无机会提示
    .qa-nochance(v-show='noChanceOpen' transition='fade' @touchend='openNoChance(false)')
      .popup

    //- 分享提示
    .qa-share(v-show='shareOpen' transition='fade' @click='openShare(false)')
      .popup

    //- 答题
    .qa-main(v-if='progress >= 0 && qaResult.codestatus === 0' transition='fade')
      //- 背景
      .bg
      //- 时钟
      .clock
        strong {{ time }}
        small s
      //- 标题和序号
      .title
        em
        strong(v-if='progress < 9') 0{{ progress + 1 }}
        strong(v-else) {{ progress + 1 }}
      //- 题干
      .question {{ qaList[progress].title }}
      //- 选项
      .answers
        ul
          - for(var i=0;i<4;i++)
            li
              label
                span {{ qaList[progress].answer.split('|')[#{i}] }}
                input(type='radio' name='answer' value='#{i}' @click='addAnswer(progress, qaList[progress].id, #{i})')
                em
      //- 下一题按钮
      a.next(v-if='progress < 9 && qaAnswer[progress]' transition='fade' @click='setProgress(progress + 1)')

    //- 中奖
    .qa-result(v-if='qaResult.codestatus' transition='fade')
      .bg

      //- 佳佳，中奖状态
      .qa-jiajia(v-if='qaResult.codestatus === 1 || qaResult.codestatus === 2')
      //- 康康
      .qa-kangkang(v-if='qaResult.codestatus === 3 || qaResult.codestatus === 4')
      //- 佳佳，未中奖状态
      .jiajia2(v-if='qaResult.codestatus === 5 || qaResult.codestatus === 6')

      //- pass
      .mark_pass(v-if='qaResult.codestatus === 1 || qaResult.codestatus === 2 || qaResult.codestatus === 5 || qaResult.codestatus === 6')
      //- fail
      .mark_fail(v-if='qaResult.codestatus === 3')
      //- time's up
      .mark_timesup(v-if='qaResult.codestatus === 4')

      //- 有一个小秘密告诉你
      .txt_0

      //- 老司机带带我
      .txt_2(v-if='qaResult.codestatus === 1 || qaResult.codestatus === 2')
      //- 分享加机会
      .txt_1(v-if='qaResult.codestatus === 3 || qaResult.codestatus === 4 || qaResult.codestatus === 5 || qaResult.codestatus === 6')

      //- 电视
      .bubble_tv(v-if='qaResult.codestatus === 1')
      .tip_tv(v-if='qaResult.codestatus === 1')
        .code {{ qaResult.code }}

      //- 电影票
      .bubble_tickets(v-if='qaResult.codestatus === 2')
      .tip_tickets(v-if='qaResult.codestatus === 2')
        .code {{ qaResult.code }}

      //- 没答对
      .bubble_fail(v-if='qaResult.codestatus === 3')

      //- 超时
      .bubble_timesup(v-if='qaResult.codestatus === 4')

      //- 已发完
      .bubble_noaward(v-if='qaResult.codestatus === 5')

      //- 未抽中
      .bubble_nolottery(v-if='qaResult.codestatus === 6')

      //- 按钮s
      .btns
        a.btn-share(@click='openShare(true)')
        a.btn-back(@click='back3D')
        a.btn-prize(v-if='qaResult.codestatus === 1 || qaResult.codestatus === 2' @click='openRules(true)')
</template>

<style lang="less" scoped>
@import './index.less';
</style>

<script>
import { openRules, setProgress, getQList, openNoChance, addAnswer, back3D, openShare } from '../../vuex/actions/qa'

export default {
  name: 'qa',
  vuex: {
    getters: {
      qaId: state => state.qaId,
      rulesOpen: state => state.qaRulesOpen,
      shareOpen: state => state.qaShareOpen,
      noChanceOpen: state => state.qaNoChanceOpen,
      progress: state => state.qaProgress,
      chanceNum: state => state.qaChanceNum,
      qaList: state => state.qaList,
      time: state => state.qaTime,
      qaAnswer: state => state.qaAnswer,
      qaResult: state => state.qaResult
    },
    actions: { openRules, setProgress, getQList, openNoChance, addAnswer, back3D, openShare }
  },
  components: {},
  data: function () {
    return {}
  },
  methods: {},
  ready: function () {
    // 获取问题列表
    this.getQList()

    window.$(document).off('touchend')
  }
}
</script>
