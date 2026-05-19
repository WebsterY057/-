#!/bin/bash
# 视频合成脚本 - ffmpeg 将帧序列和音频合并为 MP4

OUTPUT_DIR="/Users/yy/Documents/personal/personal_project/视频制作"
FRAMES_DIR="$OUTPUT_DIR/frames"
AUDIO="$OUTPUT_DIR/final_audio.wav"
FINAL="$OUTPUT_DIR/黄芪救太后_水墨动画.mp4"

echo "=== 视频合成开始 ==="
echo "帧目录: $FRAMES_DIR"
echo "音频: $AUDIO"
echo "输出: $FINAL"

# 检查帧数量
FRAME_COUNT=$(ls -1 "$FRAMES_DIR"/frame_*.png 2>/dev/null | wc -l | tr -d ' ')
echo "帧数量: $FRAME_COUNT"

if [ "$FRAME_COUNT" -lt 100 ]; then
    echo "错误: 帧数量不足 ($FRAME_COUNT < 100)"
    exit 1
fi

# 合成视频
# -framerate 30: 输入帧率
# -i 帧序列: frame_%04d.png
# -i 音频: final_audio.wav  
# -c:v libx264: H.264 编码
# -crf 23: 质量（越小越高）
# -pix_fmt yuv420p: 兼容性
# -shortest: 以最短的流为准
# -t 30: 限制30秒
ffmpeg -y \
    -framerate 30 \
    -i "$FRAMES_DIR/frame_%04d.png" \
    -i "$AUDIO" \
    -c:v libx264 \
    -preset medium \
    -crf 23 \
    -pix_fmt yuv420p \
    -c:a aac \
    -b:a 128k \
    -shortest \
    -t 30 \
    "$FINAL"

if [ $? -eq 0 ]; then
    SIZE=$(ls -lh "$FINAL" | awk '{print $5}')
    echo "=== 视频合成完成 ==="
    echo "输出: $FINAL"
    echo "大小: $SIZE"
else
    echo "=== 视频合成失败 ==="
    exit 1
fi
