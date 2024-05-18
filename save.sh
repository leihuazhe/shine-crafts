sequence=$(date +"%j-%u")
commit_date=$(date +" %Y-%m-%d %T")
# "$(date)" 不会引用上方的变量,而是直接执行函数了
# "${commit_date}" or "$commit_date" 会引用到变量
msg="Reserved, time: $commit_date"

git add .
git commit -am "feat($sequence): $msg"

sleep 1
git pull --rebase origin master || true
sleep 1
git push origin master || true
