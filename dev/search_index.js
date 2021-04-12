var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = RealContinuedFractions","category":"page"},{"location":"#RealContinuedFractions","page":"Home","title":"RealContinuedFractions","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for RealContinuedFractions.jl.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Depth = 3","category":"page"},{"location":"#Examples","page":"Home","title":"Examples","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"julia> using RealContinuedFractions\n\njulia> fromcontfrac(contfrac(π, 4))\n355//113\n\njulia> fromcontfrac(contfrac(big(π), 25))\n8958937768937//2851718461558\n\njulia> cf = contfrac(6283//2000)\nContinuedFraction{Vector{Int64}}([3, 7, 14, 1, 8, 2])\n\njulia> fromcontfrac(cf)\n6283//2000\n\njulia> fromcontfrac(Float64, cf)\n3.1415\n\njulia> convergents(contfrac(π, 5))\n5-element Vector{Rational{Int64}}:\n      3//1\n     22//7\n    333//106\n    355//113\n 103993//33102","category":"page"},{"location":"#Library","page":"Home","title":"Library","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"#Public","page":"Home","title":"Public","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Modules = [RealContinuedFractions]\nPrivate = false","category":"page"},{"location":"#RealContinuedFractions.ContinuedFraction","page":"Home","title":"RealContinuedFractions.ContinuedFraction","text":"ContinuedFraction(q::Q)\n\nType representing a continued fraction, storing the terms with the type Q.\n\n\n\n\n\n","category":"type"},{"location":"#RealContinuedFractions.contfrac","page":"Home","title":"RealContinuedFractions.contfrac","text":"contfrac(x::Real)\ncontfrac(x::Real, n::Integer)\ncontfrac(T::Type, x::Real)\ncontfrac(T::Type, x::Real, n::Integer)\n\nCompute the first n terms of the continued fraction of x, representing it with type T (defaults to Int).\n\n\n\n\n\n","category":"function"},{"location":"#RealContinuedFractions.convergent","page":"Home","title":"RealContinuedFractions.convergent","text":"convergents(cf::ContinuedFraction)\nconvergents(T::Type, cf::ContinuedFraction)\n\nCompute the last convergent of the continued fraction.\n\nThese are almost equivalent to\n\nfromcontfrac(cf)\nfromcontfrac(Rational{T}, cf)\n\nbut perform the computation in the opposite order.\n\nMoreover, it does not use the type Rational internally, so it does not check for overflow.\n\n\n\n\n\n","category":"function"},{"location":"#RealContinuedFractions.convergents","page":"Home","title":"RealContinuedFractions.convergents","text":"convergents(cf::ContinuedFraction)\nconvergents(T::Type, cf::ContinuedFraction)\n\nCompute the convergents of the continued fraction.\n\n\n\n\n\n","category":"function"},{"location":"#RealContinuedFractions.fromcontfrac","page":"Home","title":"RealContinuedFractions.fromcontfrac","text":"fromcontfrac(cf::ContinuedFraction)\nfromcontfrac(T::Type, cf::ContinuedFraction)\n\nEvaluate the continued fraction cf using the type T (defaults to the rational type associated with eltype(cf)).\n\n\n\n\n\n","category":"function"},{"location":"#Private","page":"Home","title":"Private","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Modules = [RealContinuedFractions]\nPublic = false","category":"page"},{"location":"#RealContinuedFractions._rational","page":"Home","title":"RealContinuedFractions._rational","text":"_rational(::Type)\n\nPromote integral types to rational and leave others as they are.\n\n\n\n\n\n","category":"function"}]
}
