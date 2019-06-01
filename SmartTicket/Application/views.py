from django.shortcuts import render,HttpResponse

def default(request):
    #return HttpResponse("hello")
    return render(request,"Index.html")